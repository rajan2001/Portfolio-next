import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const BlogTable = () => {
  return (
    <div
      className=" dark:bg-gray-700/25  bg-gray-300/50 rounded-lg ring-2 ring-transparent col-span-full grid grid-cols-12 py-14 hover:ring-red-400 hover:ring-offset-4 dark:ring-offset-[#1d010a]   dark:hover:ring-yellow-400 transition-all duration-300"
      id="target-section">
      <div className=" col-start-2 col-span-5 flex flex-col ">
        <div className="flex-1">
          <h2 className="text-lg font-medium">Featured article</h2>
          <h3 className="leading-tight text-3xl md:text-4xl mt-12">useEffect vs useLayoutEffect</h3>
          <h3 className="mt-6 text-xl font-medium text-slate-500">June 5th, 2023</h3>
        </div>
        <div className="flex items-center gap-4">
          <h3>Read full article</h3>
          <Button
            className="rounded-full h-14 w-14 border-2 border-transparent  dark:hover:border-white hover:border-black hover:translate-x-4 transition-all duration-300"
            variant={"outline"}>
            <ArrowRight className="h-10 w-10" />
          </Button>
        </div>
      </div>
      <div className="col-start-7  col-span-full">
        <Image src={"/image.png"} width={500} height={500} alt="image" />
      </div>
    </div>
  );
};

export default BlogTable;
