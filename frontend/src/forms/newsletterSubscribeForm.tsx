import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast"

// Define the type for form data
interface FormData {
    userEmail: string;
}

export const NewsletterSubscribeForm: React.FC = () => {
    const { toast } = useToast()  // Import useToast hook

    const form = useRef<HTMLFormElement>(null); // Type the ref with HTMLFormElement
    const [formData, setFormData] = useState<FormData>({
        userEmail: "",
    });
    const [errorMessage] = useState<string | undefined>();
    const [successMessage, setSuccessMessage] = useState<string | undefined>();

    // Handle input changes
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/api/subscribe/`;
    
        try {
            const response = await axios.post(apiUrl, {
                email: formData.userEmail
            });
    
            // Check if the response status is in the range of 200-299
            if (response.status >= 200 && response.status < 300) {
                toast({
                    title: "Thank you for subscribing!",
                    description: "You're now subscribed to our newsletter. Stay tuned for updates in your inbox!",
                });
                    
                setFormData({ userEmail: "" });
            } else {
                // Default error message
                throw new Error("Failed to subscribe. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
    
            let errorMessage = "An unexpected error occurred. Please try again.";
    
            if (axios.isAxiosError(error) && error.response) {
                // Extract the error message from the response
                const backendError = error.response.data;
                errorMessage = backendError.email || errorMessage;
            }
    
            toast({
                title: "Subscription Error",
                description: errorMessage,
                variant: "destructive" // Use destructive for error toasts
            });
    
            // Clear success message if any
            setSuccessMessage(undefined);
        }
    };
    
    
    

    return (
        <div>
            <form
                onSubmit={handleOnSubmit}
                ref={form}
                className="flex flex-col md:flex-row"
            >
                <label htmlFor="userEmail" className="hidden">
                    Email
                </label>
                <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    required
                    value={formData.userEmail}
                    onChange={handleOnChange}
                    placeholder="Enter your email"
                    className="input-hero font-medium rounded-md mb-[12px] md:mb-[0px] border-0 md:w-[363px] py-3 px-4 text-lg placeholder:text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <button
                    type="submit"
                    className="button-hero bg-[#F2F4F7] md:w-[185px] md:ml-4 text-black rounded-md py-3 px-5 text-lg font-semibold hover:bg-[#C8E870] duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                    Subscribe
                </button>
            </form>

            {/* Display success message */}
            {successMessage && (
                <p className="text-yellow-500 mt-4">{successMessage}</p>
            )}

            {/* Display error message */}
            {errorMessage && (
                <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
        </div>
    );
};
