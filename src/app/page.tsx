import MenuSheet from "@/components/menu-sheet";
import ThemeSelector from "@/components/theme-selecter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <Label className="text-2xl font-bold lg:hidden text-primary">
          <Link href="/">Autobot</Link>
        </Label>

        <MenuSheet />
      </div>

      <div className="items-center justify-between hidden p-3 border-b lg:flex border-border">
        <div className="flex items-center space-x-5">
          <Label className="text-2xl font-bold text-primary">
            <Link href="/">Autobot</Link>
          </Label>
          <Link href="/">Home</Link>
          <Link
            href="https://github.com/connor-davis/AutobotSetup/releases"
            target="_blank"
          >
            <div className="flex items-center space-x-1">
              <p>Download</p>
              <OpenInNewWindowIcon />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <ThemeSelector />

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button className="w-full">
                <div className="flex items-center space-x-1">
                  <p>Sign In</p>
                </div>
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        fd
      </div>

      <div className="flex flex-col w-full h-full px-10 overflow-y-auto lg:px-96">
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
          <div className="flex flex-col col-span-2 space-y-10">
            <Label className="text-4xl font-bold">
              Make It Easier With Autobot
            </Label>

            <p>
              Autobot allows you to perform key combinations easily by allowing
              you to choose what keys must be pressed and it also allows you to
              choose the timings it needs between those keys.
            </p>

            <Link
              href="https://github.com/connor-davis/AutobotSetup/releases"
              target="_blank"
            >
              <Button className="w-full">
                <div className="flex items-center space-x-1">
                  <p>Download</p>
                  <OpenInNewWindowIcon />
                </div>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col w-full lg:space-y-10">
            <img
              src="/assets/SilentShotPageAB.png"
              className="w-full"
              width="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
