import ThemeSelector from "@/components/theme-selecter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Menubar } from "@/components/ui/menubar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center space-x-5">
          <Label className="text-2xl font-bold text-primary">
            <Link href="/">Autobot</Link>
          </Label>
        </div>

        <div className="flex items-center space-x-5">
          <ThemeSelector />

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
