import HomeAbout from "@/components/HomeAbout";
import HomeFeature from "@/components/HomeFeature";
import HomeHero from "@/components/HomeHero";

function Page() {

  return (
    <div className=" space-y-40">
      <HomeHero />
      <HomeAbout />
      <HomeFeature />
    </div>

  );
}

export default Page;
