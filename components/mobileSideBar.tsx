"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function MobileSideBar({ Navlink }: { Navlink: string[] }) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // for hydration purpose

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Menu className="h-[2rem] w-[2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="pt-[6rem] dark:bg-black lg:hidden ">
        <ul className="flex gap-12 items-center flex-col text-lg font-semibold dark:text-white/60 text-black/60">
          {Navlink.map((link) => (
            <Link
              key={link}
              className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:mt-2 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white dark:hover:text-white hover:text-black"
              href={link}>
              {link}
            </Link>
          ))}
          <div>
            <ModeToggle />
          </div>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSideBar;
