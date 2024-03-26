"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="dark:ring-0 dark:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full p-6">
      <SunIcon
        className=" absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme("dark")}
      />
      <MoonIcon
        className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all duration-700  dark:rotate-0 dark:scale-100 "
        onClick={() => setTheme("light")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
