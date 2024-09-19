import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { WaitlistForm } from "./waitlistForm";

export const WaitlistModal = () => {
    return (
        <Dialog>
            <DialogTrigger className="button-navbar text-center bg-[#C8E870]   px-4 py-2 rounded duration-300 ease-in-out hover:bg-[#A0CC28] w-full md:w-auto">
                Join Waitlist
            </DialogTrigger>
            <DialogContent className="bg-[#F9FAFB] w-[90%] max-w-[600px] max-h-[95vh] my-auto mx-auto rounded overflow-y-auto p-4 flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-center font-semibold text-3xl">
                        Join Our Waitlist
                    </DialogTitle>
                    <DialogDescription className="text-center text-bold mt-2">
                        You can reach us anytime via <span className="text-[#A0CC29]">mohamed.omar@tokunize.com</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1">
                    <WaitlistForm/>
                </div>
            </DialogContent>
        </Dialog>
    );
};
