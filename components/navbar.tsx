"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import MobileSideBar from "./mobileSideBar";
import { usePathname } from "next/navigation";

function NavBar({ Navlink }: { Navlink: string[] }) {
  const pathname = usePathname().split("/");
  return (
    <nav className="flex justify-between px-0  py-12  items-center font-semibold">
      <Link
        href={"/"}
        className={`text-[2rem] after:content-[''] after:mt-2 after:block 
        after:w-0 after:h-[2px] dark:after:bg-white after:bg-black hover:after:w-full after:transition-all after:duration-300 `}>
        Rajan Pandey
      </Link>
      <ul className="hidden lg:flex gap-12 items-center text-lg font-semibold dark:text-white/60 text-black/60">
        {Navlink.map((link) => (
          <Link
            key={link}
            className={`after:content-[''] after:block ${pathname[1] === link ? "after:w-full dark:text-white text-black" : "after:w-0 hover:after:w-full dark:hover:text-white"} after:h-[2px] after:bg-black dark:after:bg-white after:mt-2  after:transition-all after:duration-300  hover:text-black`}
            href={`/${link}`}>
            {link}
          </Link>
        ))}
        <a
          href="https://drive.google.com/file/d/1CSnwEwfb8w1_A-trW1OycZ7pkn-Z8UlA/view"
          className={`after:content-[''] after:block ${"after:w-0 hover:after:w-full dark:hover:text-white"} after:h-[2px] after:bg-black dark:after:bg-white after:mt-2  after:transition-all after:duration-300  hover:text-black`}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </ul>
      <div className="hidden lg:block">
        <ModeToggle />
      </div>
      <div className="lg:hidden">
        <MobileSideBar Navlink={Navlink} />
      </div>
    </nav>
  );
}

export default NavBar;
