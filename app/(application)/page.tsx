"use client"
import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";

function Page() {
  const handleClick = () => {
    const section = document.getElementById("target-section");
    if (section) {
      window.scrollTo({ behavior: "smooth", top: section.offsetTop - 150, });
    }
  };
  return (
    <div className=" space-y-40">
      <HomeHero handleClick={handleClick} />
      <div id="target-section">
        <HomeAbout />
      </div>
      <HomeHero handleClick={handleClick} />
    </div>

  );
}

export default Page;
