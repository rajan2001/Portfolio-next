import dynamic from "next/dynamic";

const DynamicAnimation = dynamic(() => import("./animation2"), {
    ssr: false,
});

export default function About() {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <DynamicAnimation />
        </div>
    )
}

