"use client"
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { CldImage } from 'next-cloudinary';
import { useRouter } from "next/navigation";

const BlogTable = ({ blogs }: any) => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/Blog/${id}`)
  }


  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-16">
        {blogs.map((blog: any) => {
          if (blog.featured) {
            return <div
              key={blog.id}
              onClick={() => handleClick(blog.id)}
              className="cursor-pointer group dark:bg-gray-700/25 bg-gray-300/50 rounded-lg ring-2 ring-transparent col-span-full px-6 md:px-10 lg:px-0 grid grid-cols-4 lg:grid-cols-12 md:grid-cols-8 py-14 hover:ring-red-400 hover:ring-offset-4 dark:ring-offset-[#1d010a] gap-10 lg:gap-0   dark:hover:ring-yellow-400 transition-all duration-300"
              id="target-section">

              <div className=" col-span-full lg:col-span-5 lg:col-start-2 lg:flex lg:flex-col lg:justify-between">
                <div className="flex-1 flex flex-col">
                  <h2 className="text-xl font-medium">Featured article</h2>
                  <h3 className="leading-tight text-3xl md:text-4xl mt-12">{blog.heading}</h3>
                  <h3 className="mt-6 text-xl font-medium text-slate-500">{blog.createdAt}</h3>
                </div>
                <div className="flex items-center mt-12">
                  <h3 className="mr-8 text-xl font-medium">Read full article</h3>
                  <Button
                    className="rounded-full h-14 w-14 border-2 border-transparent  dark:group-hover:border-white group-hover:border-black group-hover:translate-x-4 transition-all duration-300"
                    variant={"outline"}>
                    <ArrowRight className="h-10 w-10" />
                  </Button>
                </div>
              </div>
              <div className="col-span-full  lg:col-span-4 lg:col-start-8 ">
                <div className=" aspect-[4/3] lg:aspect-[4/5]">
                  <CldImage
                    src={`${blog.image}`}
                    width="512"
                    height="512"
                    alt="image"
                    className=" h-full w-full rounded-lg object-cover object-center"
                    crop={{
                      type: 'auto',
                      source: true
                    }}
                  />
                </div>
              </div>

            </div>
          }
          else {
            return <div
              key={blog.id}
              onClick={() => handleClick(blog.id)}
              id="target-section"
            >
              <div className="flex flex-col cursor-pointer group " >
                <div className="  aspect-[3/4] rounded-lg ring-2 ring-transparent  group-hover:ring-red-400 group-hover:ring-offset-4 dark:ring-offset-[#1d010a]   dark:group-hover:ring-yellow-400 transition-all duration-300 ">
                  <CldImage
                    src={`${blog.image}`}
                    width="500" // Transform the image: auto-crop to square aspect_ratio
                    height="500"
                    alt="image"
                    className=" h-full w-full focus-ring  rounded-lg object-cover object-center transition-opacity"
                    crop={{
                      type: 'auto',
                      source: true
                    }}
                  />
                </div>

                <h3 className="mt-6 text-xl font-medium text-slate-500">{blog.createdAt}</h3>
                <h3 className="text-2xl mt-8">{blog.heading}</h3>

              </div>
            </div>
          }
        })}
      </div>
    </>
  );
};

export default BlogTable;
