import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import axios from 'axios';
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

// Form schema with validation rules
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone_number: z.string()
    .regex(/^\d+$/, {
      message: "Phone number must only contain digits.",
    })
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    })
    .max(15, {
      message: "Phone number must not exceed 15 digits.",
    }),
  message: z.string().optional(), // No validation on length
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  property_county: z.string().optional(), // Only required for property owners
  property_type: z.string().optional(), // Only required for property owners
  property_owner: z.boolean(), // New field added to schema
});

const items = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
];

export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      message: "",
      terms: false,
      property_type: "",
      property_county: "",
      property_owner: false,
    },
  });
  const [formType, setFormType] = useState<'investor' | 'property_owner'>('investor');

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/contacted-clients/`;

    try {
      const response = await axios.post(apiUrl, {
        email: data.email,
        name: data.name,
        surname: data.surname,
        phone_number: data.phone_number,
        message: data.message,
        property_county: data.property_county,
        property_type: data.property_type,
        property_owner: formType === 'property_owner', // Set property_owner based on formType
      });

      if (response.status >= 200 && response.status < 300) {
        toast({
          title: "Thank you!",
          description: "We have received your message and will get back to you soon.",
          action: <ToastAction altText="Undo your submission">Undo</ToastAction>,
        });

        form.reset();
        setFormType('investor'); // Reset form type to 'investor' after submission
      }
    } catch (err: unknown) {
      let errorMessage = "An unexpected error occurred.";
      if (axios.isAxiosError(err) && err.response?.data) {
        const errorData = err.response.data;
        errorMessage = errorData.detail;
      }

      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <Button
            type="button"
            className={`text-[#121212] ${formType === 'investor' ? 'bg-[#C8E870]' : 'bg-white'} hover:bg-[#A0CC28]`}
            onClick={() => setFormType('investor')}
          >
            I'm an investor
          </Button>
          <Button
            type="button"
            className={`text-[#121212] ${formType === 'property_owner' ? 'bg-[#C8E870]' : 'bg-white'} hover:bg-[#A0CC28]`}
            onClick={() => setFormType('property_owner')}
          >
            I'm a property owner
          </Button>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="hidden">Name</FormLabel>
                  <FormControl>
                    <Input className="border-0" placeholder="First Name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="hidden">Surname</FormLabel>
                  <FormControl>
                    <Input className="border-0" placeholder="Surname*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Email Address</FormLabel>
                <FormControl>
                  <Input className="border-0" placeholder="Email address*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Phone Number</FormLabel>
                <FormControl>
                  <Input className="border-0" placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">How can I help you?</FormLabel>
                <FormControl>
                  <Textarea className="border-0" placeholder="How can I help you?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {formType === 'property_owner' && (
            <>
              <FormField
                control={form.control}
                name="property_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value === item.id}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? item.id : "")
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="property_county"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">County</FormLabel>
                    <FormControl>
                      <Input className="border-0" placeholder="County" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center text-[#667085] space-x-2 py-[45px]">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel htmlFor="terms" className="text-[12px]">
                      I confirm that I have read the terms and conditions
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-[#121212] bg-[#C8E870] hover:bg-[#A0CC28]">Submit</Button>
        </form>
      </div>
    </Form>
  );
};
