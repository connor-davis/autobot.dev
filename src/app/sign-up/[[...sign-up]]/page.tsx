import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-background">
      <SignUp />
    </div>
  );
};

export default Page;
