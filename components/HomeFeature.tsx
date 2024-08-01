import { HomeProjectLinks } from "@/config"
import HomeProject from "./HomeProject"

const Info = [
    {
        id: 1,
        heading: "Paytres",
        paragraph: "A Invoice Management Tool , Seamlessly Receive and Pay Invoices Using Crypto for Freelancers and Businesses. Easily Manage Recurring Invoices with Efficiency and Security, Empowering Smoother Transactions in the Digital Economy.",
        stackLinks: HomeProjectLinks,
        links: "https://paytres.com",
        githubLink: "https://github.com/rajan2001"
    }

]

const HomeFeature = () => {
    return (
        <div className="flex flex-col gap-10">
            {Info.map((info) => <HomeProject
                key={info.id}
                heading={info.heading}
                paragarph={info.paragraph}
                links={info.links}
                stackLinks={info.stackLinks}
                githubLink={info.githubLink}
                view={"halfImage"}
                imageLink={"/paytres-project.png"}
            />)}
        </div>
    )
}

export default HomeFeature