import React, { useState, useRef, FormEvent, ChangeEvent } from "react";

// Define the type for form data
interface FormData {
    userEmail: string;
}

// Define the type for the component state
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
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ userEmail: "" });
        console.log("Submitted");
    };

    return (
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
    );
};
