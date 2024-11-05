import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="justify-center items-center min-h-screen flex">
      <SignUp />
    </div>
  );
}
