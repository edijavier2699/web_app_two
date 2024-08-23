import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import axios from 'axios';


// Form schema with validation rules
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone_number: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().optional(), // No validation on length
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

export const ContactForm = () => {
  const { toast } = useToast()  // Import useToast hook
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      terms: false,
    },
  })

  // Modify the onSubmit function
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/contacted-clients/`;
  
    try {
      const response = await axios.post(apiUrl, {
        email: data.email,
        name: data.name,
        phone_number: data.phone_number,
        user_message: data.message
      });
  
      if (response.status >= 200 && response.status < 300) {
        // Mostrar toast de éxito
        toast({
          title: "Thank you!",
          description: "We have received your message and will get back to you soon.",
          action: (
            <ToastAction altText="Undo your submission">Undo</ToastAction>
          ),
        });
  
        form.reset();
      }
    } catch (err) {
      console.log(err); 
    }
  };
  
  

  return (
    <Form {...form}>
      <div> 
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center  text-[#667085]  space-x-2 py-[45px]">
                    <Checkbox 
                      id="terms"
                      className={field.value ? "bg-red-500" : ""}
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

          <Button type="submit" className="w-full text-[#121212] bg-[#C8E870]">Submit</Button>
        </form>
      </div>
    </Form>
  )
}
