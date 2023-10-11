"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MenuSheet = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={(open) => setMenuOpen(open)}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold lg:hidden text-primary">
            Autobot
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col pt-5 space-y-3 overflow-y-auto">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Button className="items-center justify-start w-full space-x-1 text-start">
              Home
            </Button>
          </Link>
          <Link
            href="https://github.com/connor-davis/AutobotSetup/releases"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="items-center justify-start w-full space-x-1 text-start">
              <p>Download</p>
              <OpenInNewWindowIcon />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
