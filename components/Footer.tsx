import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="flex flex-col lg:flex-row gap-y-6  py-12 border-t mt-[8rem]">
            <div className="flex-1 flex flex-col  gap-y-4 dark:text-white/60 text-black/60 text-[1.125rem] font-extralight ">
                <h3 className=" text-2xl leading-8 font-normal text-black dark:text-white">
                    Let&apos;s connect and grab a coffee ☕
                </h3>

                <p >
                    Drop me a line for work inquiries or just say hello
                </p>
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQjHJKXJrWRHrKFmJWmPKVSnljKlkFtJzwMGBZtSgmMJXdDrJWvqLPHzBjbrpsZZRxdq"
                    target="_blank"
                    rel="noreferrer"
                >
                    rajanpandey865@gmail.com
                </a>

                <p >
                    Developed with 💙 and a firey 🔥 macbook 💻 by Rajan Pandey
                </p>
            </div>
            <div className=" flex flex-col dark:text-white/60 text-black/60">
                <div className=" flex-col text-right gap-3 flex-1 sm:hidden lg:flex">
                    <Link href="/About" className="footer_links">
                        About
                    </Link>
                    <Link href="/Projects" className="footer_links">
                        Projects
                    </Link>
                    <Link
                        href="/Bolg"
                    >
                        Blog
                    </Link>
                </div>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/rajan2001"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <GitHubLogoIcon color="#9ca3af" className="bg-transparent h-6 w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/r.a.jzz/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <InstagramLogoIcon color="#9ca3af" className="bg-transparent h-6 w-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rajan-pandey-838069218/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <LinkedInLogoIcon color="#9ca3af" className="bg-transparent h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;