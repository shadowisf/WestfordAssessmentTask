import { useState } from "react";
import Hero from "./components/hero/Hero";
import ProgrammeOverview from "./components/programmeOverview/_ProgramOverview";
import ImageProgrammingProficiency from "@assets/images/programming-proficiency.png";
import ImageSoftwareDesignPrinciples from "@assets/images/software-design-principles.png";
import ImageOOP from "@assets/images/oop.png";
import ImageAgileDevelopment from "@assets/images/agile-development.png";
import ImageSoftwareDocumentation from "@assets/images/software-documentation.png";
import ImageCriticalThinking from "@assets/images/critical-thinking.png";

export default function App() {
  const [applyNowHovered, setApplyNowHovered] = useState(false);
  const [formPhone, setFormPhone] = useState<string | undefined>(undefined);

  return (
    <>
      <Hero />

      <ProgrammeOverview
        applyNowHovered={applyNowHovered}
        setApplyNowHovered={setApplyNowHovered}
        phone={formPhone}
        setPhone={setFormPhone}
      />

      <div className="mt-[-125px] bg-[#FAFBFB] h-[579px] pt-[42px] pb-[83px] space-y-[78px]">
        <h1 className="text-center text-[40px]">
          Top <span className="text-[#ECA22D]">Skills</span> You Will Learn
        </h1>

        {/* skills grid */}
        <section className="grid grid-cols-3 gap-[83px] px-[167px] place-items-center ">
          <SkillItem img={ImageProgrammingProficiency}>
            Programming Proficiency
          </SkillItem>
          <SkillItem img={ImageSoftwareDesignPrinciples}>
            Software Design Principles
          </SkillItem>
          <SkillItem img={ImageOOP}>Object-Oriented Programming</SkillItem>
          <SkillItem img={ImageAgileDevelopment}>Agile Development</SkillItem>
          <SkillItem img={ImageSoftwareDocumentation}>
            Software Documentation
          </SkillItem>
          <SkillItem img={ImageCriticalThinking}>Critical Thinking</SkillItem>
        </section>
      </div>

      
    </>
  );

  type SkillItemProps = {
    img: string;
    children: string;
  };

  function SkillItem({ img, children }: SkillItemProps) {
    return (
      <div className="flex items-center gap-[24px] w-[316px] h-[130px]">
        <img src={img} className="w-[130px]" />
        <span className="font-light text-[20px]">{children}</span>
      </div>
    );
  }
}
