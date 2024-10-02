import { LoginButton } from "../components/loginBtn";

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the blog admin login</h1>
        <LoginButton />
      </div>
    </div>
  );
};
