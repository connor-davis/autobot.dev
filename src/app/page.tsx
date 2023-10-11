import { Label } from "@/components/ui/label";
import { Menubar } from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen py-2 px-96">
      <Menubar className="p-5">
        <Label className="text-2xl font-bold text-primary">
          <Link href="/">Autobot</Link>
        </Label>
      </Menubar>
    </div>
  );
}
