"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const HomeAbout = () => {
    return (
        <div className="grid relative grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 mx-auto max-w-7xl h-auto " id="target-section">
            <div className="lg:col-start-1 lg:col-span-5  col-span-full  justify-center items-center mb-20 lg:mb-0 relative hidden lg:flex">
                <div className=" w-full mx-auto group relative overflow-hidden rounded-3xl bg-neutral-100 ">
                    <Image
                        className=" w-full object-contain grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        width={512}
                        height={512}
                        src={'/rajan-pandey.webp'}
                        alt="Profile" />

                </div>
                <div className=" bg-green-100 text-green-600 py-5 px-6 rounded-xl -bottom-6 -right-6 absolute">Let me show you what I&apos;m working on...🧑‍💻</div>
            </div>
            <div className="lg:col-start-7 col-span-full lg:col-span-7 flex flex-col h-full">
                <div className="flex flex-col gap-y-14 ">
                    <h1 className=" text-[2rem] md:text-[2.5rem]  leading-tight">
                        Hi, I&apos;m Rajan Pandey. I enjoy creating web applications that live on the internet and can be accessed by everyone.

                    </h1>
                    <p className="dark:text-white/60 text-black/60 text-2xl">
                        I am an undergrad at National Institute of Technology Jamshedpur, India pursuing my bachelors in Production and Industrial Engeneering. These days,
                        my main focus is on writing performant and industry-standard code, primarily utilising Nextjs and Node.js.
                    </p>
                    <Link href={"/About"} className="flex items-center gap-x-6 group cursor-pointer">
                        <p className="text-2xl">Learn About Me!</p>
                        <div
                            className="rounded-full h-16 w-16 group-hover:border-2  flex items-center justify-center border-2  dark:group-hover:border-white group-hover:border-black group-hover:translate-x-4 transition-all duration-300"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default HomeAbout;
