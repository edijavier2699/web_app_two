// demoForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
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
import axios from "axios";
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
  message: z.string().optional(), // No validation on length
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  userType: z.enum(['investor', 'property_owner'], {
    required_error: "You must select either Investor or Property Owner.",
  }),
  formType: z.enum(['demo', 'waitlist']),
});

interface DemoFormProps {
  type: 'demo' | 'waitlist'; // Define the type prop
}

export const DemoForm = ({ type }: DemoFormProps) => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [loading, setLoading] = useState(false); // Track loading state
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
      terms: false,
      userType: "investor",
      formType: type,  
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/contacted-clients/`;

    setLoading(true); // Show spinner

    try {
      const response = await axios.post(apiUrl, {
        email: data.email,
        name: data.name,
        surname: data.surname,
        message: data.message,
        property_owner: data.userType,
        form_type: data.formType
      });

      if (response.status >= 200 && response.status < 300) {
        form.reset();
        setFormSubmitted(true); // Set form as submitted to show the calendar
      }
    } catch (err: unknown) {
      let errorMessage = "An unexpected error occurred.";

      if (axios.isAxiosError(err) && err.response?.data) {
        const errorData = err.response.data;

        if (typeof errorData === "object" && !Array.isArray(errorData)) {
          errorMessage = Object.values(errorData)
            .flat()
            .join(" ");
        } else if (typeof errorData.detail === "string") {
          errorMessage = errorData.detail;
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex justify-center items-center">
          {/* Spinner */}
          <div className="loader">Loading...</div>
        </div>
      ) : (
        !formSubmitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">  
                <>
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="hidden">Any Requirements?</FormLabel>
                        <FormControl>
                        <Textarea
                            className="border-0"
                            placeholder={
                              type === 'waitlist'
                                ? "Leave a comment or message (optional)"
                                : "Any requirements for the demo?"
                            }
                            {...field}
                          />   
                             </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center space-x-4">
                              <Checkbox
                                id="investor"
                                checked={field.value === "investor"}
                                onCheckedChange={() => field.onChange("investor")}
                              />
                              <FormLabel htmlFor="investor" className="text-[14px]">
                                Investor
                              </FormLabel>
                              <Checkbox
                                id="property_owner"
                                checked={field.value === "property_owner"}
                                onCheckedChange={() => field.onChange("property_owner")}
                              />
                              <FormLabel htmlFor="property_owner" className="text-[14px]">
                                Property Owner
                              </FormLabel>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center text-[#667085] space-x-2 py-[10px]">
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
                  <Button type="submit" className="w-full text-[#121212] bg-[#C8E870] hover:bg-[#A0CC28]">
                    {type === "waitlist" ? "Submit": "Next"}
                  </Button>
                </>
            </form>
          </Form>
        ) : (
          type === 'waitlist' ? null : (
            <div className="w-full h-[70vh] mt-4">
              {/* Microsoft 365 Calendar Embed */}
              <iframe
                src="https://outlook-sdf.office.com/bookwithme/user/982f51d0efaf4051a5a90a46dd391504%40tokunize.com/meetingtype/f7d87f87-003d-424d-b71a-2970406bd43d?bookingcode=1de9de86-a517-4f6b-b260-35be3b838196&anonymous"
                width="100%"
                height={"100%"}
                frameBorder="0"
                allowFullScreen
                title="Microsoft 365 Calendar"
              />
            </div>
          )
        ))
      }
    </div>
  );
};
