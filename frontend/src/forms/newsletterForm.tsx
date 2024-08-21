import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import axios from 'axios';

// Define the type for form data
interface FormData {
    userEmail: string;
}

// Define the type for the component form state
interface NewsletterFormState {
    formData: FormData;
    errorMessage?: string;
    successMessage?: string;
}

export const NewsletterForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null); // Type the ref with HTMLFormElement
    const [formData, setFormData] = useState<FormData>({
        userEmail: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
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
                setSuccessMessage("Subscription successful!");
                setErrorMessage(undefined);
                setFormData({ userEmail: "" });
            } else {
                setErrorMessage("Failed to subscribe. Please try again."); // Handle other responses
            }
        } catch (error) {
            //Debuggin  the errro on the browser
            console.error("Error submitting the form", error);
    
            if (axios.isAxiosError(error) && error.response) {
                // Extract the error message from the response
                const backendError = error.response.data;
                
                setErrorMessage(backendError.email || "Failed to subscribe. Please try again.");
            } else {
                setErrorMessage("An unexpected error occurred. Please try again."); // Handle unexpected errors
            }
            setSuccessMessage(undefined); // Clear success message if any
        }
    };
    
    

    return (
        <div className="flex flex-col items-center">
            <form
                onSubmit={handleOnSubmit}
                ref={form}
                className="flex flex-col sm:flex-row items-center justify-center w-full max-w-screen-md mx-auto p-4 space-y-4 sm:space-y-0 sm:space-x-4"
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
                    className="flex-grow w-full rounded-md border-0 py-3 px-4 text-lg placeholder:text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <button
                    type="submit"
                    className="bg-[#F2F4F7] w-full text-black rounded-md py-3 px-5 text-lg font-medium hover:bg-[#C8E870] focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
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
