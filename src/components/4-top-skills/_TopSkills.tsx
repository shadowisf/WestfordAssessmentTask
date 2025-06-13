import ImageProgrammingProficiency from "@assets/images/programming-proficiency.png";
import ImageSoftwareDesignPrinciples from "@assets/images/software-design-principles.png";
import ImageOOP from "@assets/images/oop.png";
import ImageAgileDevelopment from "@assets/images/agile-development.png";
import ImageSoftwareDocumentation from "@assets/images/software-documentation.png";
import ImageCriticalThinking from "@assets/images/critical-thinking.png";

export default function TopSkills() {
  return (
    <div className="xl:mt-[-125px] bg-[#FAFBFB] pt-[42px] pb-[83px] space-y-[78px]">
      <h1 className="text-center text-[40px]">
        Top <span className="text-[#ECA22D]">Skills</span> You Will Learn
      </h1>

      {/* skills grid */}
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[42px] xl:gap-[83px] xl:px-[167px] place-items-center ">
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
  );
}

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
