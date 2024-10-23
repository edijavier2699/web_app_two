import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useToast } from "@/components/ui/use-toast";

export const BlogSubscriberForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const { toast } = useToast();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}blog/subscriber/`, { email });
            setSuccess('Subscription successful!');
            setEmail(''); // Clear the input field
            toast({
                title: "Success",
                description: "You are now subscribed!",
                variant: "default",
              });
        } catch (error) {
            toast({
                title: "Error",
                description: "You are already subscribed, thank you!",
                variant: "destructive",
              });
            setEmail(''); // Clear the input field
           
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-4">
            <div>
                <label htmlFor="email" className="hidden">Email:</label>
                <Input 
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
    );
};
