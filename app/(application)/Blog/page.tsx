"use client";
import BlogGrid from "@/components/BlogGrid";
import BlogTable from "@/components/BlogTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, SearchIcon } from "lucide-react";
import Image from "next/image";

function BlogPage() {
  const handleClick = () => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grid  grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 col-span-full lg:mb-[16rem]">
        <div className="lg:col-start-6 lg:col-span-7 lg:px-0 lg:-mt-24 lg:-mr-[5vw] col-span-full mb-24 flex justify-center items-center ">
          <div className="lg:w-[80%] w-full mx-auto">
            <Image
              src={"/image.png"}
              alt="blogImage"
              width={1200}
              height={1200}
            />
          </div>
        </div>
        <div className="lg:col-start-1 lg:row-start-1 col-span-full lg:col-span-5  lg:flex lg:flex-col lg:h-full">
          <div className="flex flex-col flex-auto gap-14">
            <h1 className=" text-[2rem] md:text-[2.5rem]  leading-tight">
              Learn development with great articles.
              <div className=" text-[2rem] md:text-[2.5rem]  leading-tight  dark:text-white/60 text-black/60 mt-5">
                Find the latest of my writing here.
              </div>
            </h1>
            <form method="GET" action={"/Blog"}>
              <div className="flex items-center border rounded-full relative h-[4rem]">
                <span className="absolute left-4">
                  <SearchIcon />
                </span>
                <Input
                  type="search"
                  placeholder="Search Blogs"
                  className="py-6 pl-14 pr-6 ring-offset-0 focus-visible:ring-1 focus-visible:ring-red-400 dark:focus-visible:ring-yellow-400 focus-visible:ring-offset-0 border-none h-full rounded-full"
                />
              </div>
            </form>

            <div className="hidden lg:block pt-12 ">
              <Button
                onClick={handleClick}
                className="rounded-full h-20 w-20 hover:border-2 border-2 border-transparent dark:hover:border-white hover:border-black hover:translate-y-4 transition-all duration-300"
                variant={"outline"}>
                <ArrowDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BlogTable />
      <BlogGrid/>
    </>
  );
}

export default BlogPage;
