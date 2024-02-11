import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 ">
      <div className="space-y-6 text-center text-white">
        <h1 className={cn("text-6xl drop-shadow-md font-bold", font.className)}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton mode="redirect">
            <Button variant={"secondary"} size={"lg"}>
              Sign up
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
