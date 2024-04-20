import BlogCard from "./BlogCard";

const BlogGrid = () => {
    return (
        <div className=" bg-red-600 col-span-full mt-4">
            <div className="grid lg:grid-cols-3 ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </div>
    )
}

export default BlogGrid;