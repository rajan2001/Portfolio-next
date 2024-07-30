import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HomeProjectLinks } from "@/config";


const HomeProject = () => {
    return (
        <div className="grid relative grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 mx-auto max-w-7xl h-auto bg-slate-500/10  px-10 py-14 rounded-lg overflow-hidden ">
            <div className="lg:col-start-1 lg:col-span-5  col-span-full  justify-center items-center mb-20 lg:mb-0 flex">
                <div className=" w-full lg:w-[55%] mx-auto group  lg:absolute lg:-translate-x-[20%] ">
                    <Image
                        className=" w-full object-contain transition duration-500 motion-safe:group-hover:scale-105"
                        width={512}
                        height={512}
                        src={'/paytres-project.png'}
                        alt="Profile" />

                </div>
            </div>
            <div className="lg:col-start-7 col-span-full lg:col-span-7 flex flex-col h-full">
                <div className="flex flex-col gap-y-14 ">
                    <div>
                        <h1 className=" text-5xl font-bold">
                            Paytres
                        </h1>
                        <p className="dark:text-white/60 text-black/60 mt-6 ">
                            A Invoice Management Tool , Seamlessly Receive and Pay Invoices Using Crypto for Freelancers and Businesses. Easily Manage Recurring Invoices with Efficiency and Security, Empowering Smoother Transactions in the Digital Economy.
                        </p>
                    </div>
                    <ul className="flex gap-6 flex-wrap items-center font-semibold">
                        {HomeProjectLinks.map((link) => <li key={link} className=" cursor-pointer hover:text-orange-400">{link}</li>)}
                    </ul>
                    <div className="flex items-center gap-x-6 group ">
                        <a
                            href="https://www.paytres.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="border px-5 py-3 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                View Website
                            </div>
                        </a>
                        <a
                            href="https://github.com/rajan2001"
                            rel="noreferrer"
                            target="_blank"
                            className="cursor-pointer"
                        >
                            <GitHubLogoIcon color="white" className="bg-transparent h-10 w-10" />
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HomeProject;
