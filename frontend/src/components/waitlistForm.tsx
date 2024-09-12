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
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

// Form schema with validation rules
const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  })
});

export const WaitlistForm = ({}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false); 
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {    
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/api/subscribe/`;
    setLoading(true);

    try {
      const response = await axios.post(apiUrl, {
        email: data.email,
      });

      if (response.status >= 200 && response.status < 300) {
        form.reset();
        toast({
          title: "Success",
          description: "You have been subscribed successfully!",
          variant: "default",
        });
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          {/* <FormField
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
          /> */}
          <Button
            type="submit"
            className={`w-full text-[#121212] ${loading ? "bg-gray-300" : "bg-[#C8E870]"} hover:bg-[#A0CC28]`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
