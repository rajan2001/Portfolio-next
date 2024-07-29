"use client"
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicAnimation = dynamic(() => import("./animation"), {
  ssr: false,
});

const HomeHero = ({ handleClick }: any) => {

  return (
    <div className="grid relative grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 mx-auto max-w-7xl h-auto lg:pt-24 lg:min-h-[40rem]">
      <div className="lg:col-start-6 lg:col-span-7 lg:px-0 lg:-mt-24 lg:-mr-[5vw] col-span-full mb-12 flex justify-center items-center">
        <div className="lg:w-[80%] w-full mx-auto">
          <DynamicAnimation />
        </div>
      </div>
      <div className="lg:col-start-1 lg:row-start-1 col-span-full lg:col-span-5  lg:flex lg:flex-col lg:h-full">
        <div className="flex flex-col flex-auto">
          <h1 className=" text-[2rem] md:text-[2.5rem]  leading-tight">
            Helping people make the world a better place through quality
            software.
          </h1>
          <div className="space-y-4 mt-14">
            <div>
              <Button className="rounded-full text-[1.3rem] leading-none p-8">
                <Link href={"/Blog"}>Read the blog</Link>
              </Button>
            </div>
            <Button
              className="rounded-full text-[1.3rem] leading-none p-8"
              variant={"outline"}>
              <Link href={"/Project"}>Projects</Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block pt-12 ">
          <div
            onClick={handleClick}
            className="rounded-full h-16 w-16 cursor-pointer hover:border-2  flex items-center justify-center border-2  dark:hover:border-white hover:border-black hover:translate-y-4 transition-all duration-300">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
