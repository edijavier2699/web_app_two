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
        <Dialog>
            <DialogTrigger className="button-navbar text-center bg-[#C8E870] text-black mt-6 md:mt-8 px-4 py-3 font-bold rounded hover:bg-[#A0CC28] w-full md:w-auto">
                Contact Us
            </DialogTrigger>
            <DialogContent className="bg-[#F9FAFB] w-[90%] max-w-[600px] max-h-[95vh] my-auto mx-auto rounded overflow-y-auto p-4 flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-center font-semibold text-3xl">
                        Contact Us
                    </DialogTitle>
                    <DialogDescription className="text-center text-bold mt-2">
                        You can reach us anytime via <span className="text-[#A0CC29]">mohamed.omar@tokunize.com</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1">
                    <ContactForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};
