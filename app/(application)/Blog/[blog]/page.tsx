"use client"
import HigligtCode from "@/components/CodeHighlight"
import { blogs } from "@/config"
import { useParams } from "next/navigation"

const Page = () => {
    const { blog } = useParams()
    const blogbyId = blogs.find((b) => b.id === Number(blog))

    return <div className="h-auto lg:pt-12 flex flex-col gap-8 ">
        <h1 className=" text-[2rem] md:text-[2.5rem]  leading-tight">{blogbyId?.heading}</h1>
        <div className="flex flex-col md:flex-row gap-y-6 justify-between ">
            <div className="flex gap-4 items-center">
                {blogbyId?.keyword?.map((keyword) => <div key={keyword}
                    className=" bg-green-200 text-green-800 py-1 px-2 rounded-lg text-sm self-start">
                    {keyword}
                </div>
                )}
            </div>
            <h3 className="text-xl font-medium text-slate-500">{blogbyId?.createdAt}</h3>

        </div>

        {blogbyId?.paragraph.map((para) => <div key={para.id}>
            {para.heading ? <h3 className="text-2xl font-medium">{`${para.heading}`}</h3> : null}
            {para.points ? <ul className="list-disc ml-6 mt-6 text-slate-400">
                {para.points.map((p) => <li key={p} className="mt-2 " >{p}</li>)}
            </ul> : null}
            {para.codes ? <div className="mt-10">
                <HigligtCode codeString={para.codes} />
            </div> : null}

        </div>)}

    </div>
}

export default Page