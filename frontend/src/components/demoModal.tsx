import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DemoForm } from "../forms/demoForm";

export const DemoModal = () =>{
    return(
        <Dialog >
            <DialogTrigger className="w-[47%] sm:w-[35%] mb-[50px] mx-auto sm:mx-0 text-center bg-black text-white mt-6 md:mt-8 font-semibold px-4 py-3  rounded hover:bg-[#A0CC28] duration-300">
                Book A Demo
            </DialogTrigger>
            <DialogContent className="bg-[#F9FAFB] w-[90%]  mx-auto rounded">
                <DialogHeader>
                    <DialogTitle className="text-center font-semibold text-3xl">
                       Book A Demo
                    </DialogTitle>
                    <DialogDescription className="text-center text-bold mt-2">
                        You can reach us anytime via <span  className="text-[#A0CC29]">mohamed.omar@tokunize.com</span>
                    </DialogDescription>
                    <DemoForm/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}