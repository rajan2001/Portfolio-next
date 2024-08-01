import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

enum View {
    phoneImage = "phoneImage",
    fullImage = "fullImage",
    halfImage = "halfImage"

}
interface Props {
    heading: String,
    paragarph: String,
    stackLinks: String[],
    links: String,
    githubLink: String,
    view: String,
    imageLink: String
    reverse?: Boolean

}

const HomeProject = ({ heading, paragarph, stackLinks, links, githubLink, view, imageLink, reverse }: Props) => {
    return (
        <div className="grid relative grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 mx-auto max-w-7xl h-auto bg-slate-500/10  px-10 py-14 rounded-lg overflow-hidden ">
            <div className={`${reverse ? "lg:col-start-7 lg:col-span-7" : "lg:col-start-1 lg:col-span-5"} col-span-full  justify-center items-center mb-20 lg:mb-0 flex`}>
                {view === View.halfImage && <div className={` w-full lg:w-[55%] mx-auto group  lg:absolute ${reverse ? "lg:translate-x-[20%]" : "lg:-translate-x-[20%]"} `} >
                    <Image
                        className=" w-full object-contain transition duration-500 motion-safe:group-hover:scale-105"
                        width={512}
                        height={512}
                        src={'/paytres-project.png'}
                        alt="Profile" />

                </div>}
                {
                    view === View.fullImage && <div className=" w-full mx-auto group ">
                        <Image
                            className=" w-full object-contain transition duration-500 motion-safe:group-hover:scale-105"
                            width={512}
                            height={512}
                            src={`${imageLink}`}
                            alt="Profile" />

                    </div>
                }
                {
                    view === View.phoneImage && <div className=" w-full mx-auto group ">
                        <Image
                            className=" w-full object-contain transition duration-500 motion-safe:group-hover:scale-105"
                            width={512}
                            height={512}
                            src={'/paytres-project.png'}
                            alt="Profile" />

                    </div>
                }
            </div>
            <div className={` ${reverse ? "lg:col-start-1 lg:col-span-6" : " lg:col-start-7 lg:col-span-7"} col-span-full flex flex-col h-full`}>
                <div className="flex flex-col gap-y-14 ">
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center  gap-6">
                            <h1 className=" text-5xl font-bold">
                                {heading}
                            </h1>
                            <div className="hidden md:block bg-purple-200 text-purple-800 py-2 px-3 rounded-3xl text-sm">Featured Project</div>
                        </div>
                        <p className="dark:text-white/60 text-black/60 mt-8 ">
                            {paragarph}
                        </p>
                    </div>
                    <ul className="flex gap-6 flex-wrap items-center font-semibold">
                        {stackLinks.map((link, index) => <li key={index} className=" cursor-pointer hover:text-orange-400">{link}</li>)}
                    </ul>
                    <div className="flex items-center gap-x-6 group ">
                        <a
                            href={`${links}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="border px-5 py-3 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                View Website
                            </div>
                        </a>
                        <a
                            href={`${githubLink}`}
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
