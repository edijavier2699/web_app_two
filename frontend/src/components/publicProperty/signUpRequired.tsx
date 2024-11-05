import { useNavigate } from "react-router-dom";
import { MyButton } from "../signUpBtn";

export const SignUpRequired = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/request-invitation/");
    };

    return (
        <article className="flex flex-col items-center p-6 ">
            <p className="mb-4 text-center text-black text-lg font-semibold">
                Don’t miss the opportunity to unlock valuable insights.
            </p>
            <MyButton
                label="Request Invitation"
                parentMethod={handleClick}
            />
        </article>
    );
};
