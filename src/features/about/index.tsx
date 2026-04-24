import { MissionVision } from "./components/mission-vision";
import { OurStory } from "./components/our-story";

export const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/images/about.svg" alt="About Us" className="w-44 h-44" />
        <div className="w-full">
          <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
            About Us
          </h1>
        </div>
      </div>
      <OurStory />
      <MissionVision />
    </div>
  );
};
