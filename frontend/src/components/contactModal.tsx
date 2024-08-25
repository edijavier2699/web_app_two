import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { ContactForm } from "@/forms/contactForm";

export const ContactModal = () => {
    
    return (
        <Dialog >
            <DialogTrigger className="button-navbar text-center bg-[#C8E870] text-black mt-6 md:mt-8 px-4 py-3 font-bold rounded hover:bg-[#A0CC28] w-full md:w-auto">
                Contact Us
            </DialogTrigger>
            <DialogContent className="bg-[#F9FAFB] w-[90%] mx-auto rounded">
                <DialogHeader>
                    <DialogTitle className="text-center font-semibold text-3xl">
                        Contact Us
                    </DialogTitle>
                    <DialogDescription className="text-center mt-2">
                        Please fill out the form below to get in touch with us.
                    </DialogDescription>
                </DialogHeader>
                <ContactForm />
            </DialogContent>
        </Dialog>
    );
};
