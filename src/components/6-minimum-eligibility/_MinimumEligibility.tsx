import BulletPoint from "../svg/BulletPoint";
import ImagePearsonLogo from "@assets/images/pearson-logo.png";

export default function MinimumEligibility() {
  return (
    <>
      <div className="px-[32px] xl:px-[42px] pt-[40px] pb-[61px] bg-[#0C2D46] text-white space-y-[20px]">
        <h1 className="text-[40px]">
          <span className="text-[#ECA22D]">Who</span> Is This Programme For?
        </h1>
        <p className="font-light text-[16px] max-w-[814px]">
          The Higher National Diploma International (HND) in Computing with a
          specialization in Software Engineering is designed for a diverse range
          of individuals who are interested in pursuing a career in the field of
          software development. This program caters to various backgrounds and
          aspirations, making it suitable for High School Graduates, Tech
          Enthusiasts, and IT Professionals etc.
        </p>
      </div>

      <div className="px-[32px] xl:px-[42px] pt-[40px] pb-[77px] space-y-[77px]">
        {/* minimum eligiblity */}
        <div className="space-y-[20px]">
          <h1 className="text-[40px]">
            Minimum <span className="text-[#ECA22D]">Eligibility</span>
          </h1>

          <section className="flex items-center gap-[20px] font-light text-[16px]">
            <BulletPoint className="w-[14px] h-[8px] text-[#0C2D46]" />
            <span>
              Students must be 
              <span className="font-semibold">High School Graduates</span>
            </span>
          </section>
        </div>

        <div className="space-y-[20px]">
          <section className="flex flex-wrap items-center gap-[24px]">
            <h1 className="font-extralight text-[40px]">Awarding Body:</h1>
            <img className="w-[189px]" src={ImagePearsonLogo} />
          </section>

          <p className="font-light text-[16px]">
            Pearson Education is a British-owned educational publishing and
            appraisal service for educational institutions and corporations, as
            for students directly. It integrates world-class educational content
            and evaluation, driven by services and technology, to allow more
            efficient teaching and customized learning. Their mission is to have
            a direct partnership with millions of lifelong learners and to link
            education to the way people aspire to live and work each day. They
            assume that wherever learning flourishes, people do as well.
          </p>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap gap-[80px] xl:gap-[135px]">
          <section className="space-y-[20px]">
            <h1 className="font-extralight text-[40px]">Core Modules</h1>

            <div className="p-[45px] grid grid-cols-1 justfy-between border border-[#E6E6E6] rounded-[25px] xl:min-w-[679px]">
              <section className="grid grid-cols-2 pb-[20px] text-[24px]">
                <h2 className="justify-self-start">Module Name</h2>
                <h2 className="justify-self-end">Credit</h2>
              </section>

              {/* core modules list */}
              <section className="space-y-[17px]">
                <CoreModulesItem module="Programming">15</CoreModulesItem>
                <CoreModulesItem module="Networking">15</CoreModulesItem>
                <CoreModulesItem module="Professional Practice">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Database Design & Development">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Security">15</CoreModulesItem>
                <CoreModulesItem module="Planning a Computing Project (Pearson-set)">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Software Development Lifecycles">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Website Design & Development">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Computing Research Project (Pearson-set)">
                  30
                </CoreModulesItem>
                <CoreModulesItem module="Business Process Support">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Discrete Maths">15</CoreModulesItem>
                <CoreModulesItem module="Data Structures & Algorithms">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Applied Programming and Design Principles">
                  15
                </CoreModulesItem>
                <CoreModulesItem module="Operating Systems">15</CoreModulesItem>
                <CoreModulesItem module="Cloud Computing">15</CoreModulesItem>
              </section>
            </div>
          </section>

          <section className="space-y-[20px]">
            <h1 className="font-extralight text-[40px]">Key Learnings</h1>

            {/* key learnings list */}
            <KeyLearningsItem>
              Gain the essential knowledge, understanding, and skills required
              for a successful career in the computing industry, equipping you
              with a solid foundation to excel in various roles.
            </KeyLearningsItem>
            <KeyLearningsItem>
              Develop a versatile skill set through the effective integration of
              knowledge and skills gained across different program components,
              enabling you to tackle multifaceted challenges in the computing
              industry.
            </KeyLearningsItem>
            <KeyLearningsItem>
              Gain flexibility, knowledge, skills, and motivation that serve as
              a solid foundation for ongoing studies and career advancement in
              the dynamic realm of computing
            </KeyLearningsItem>
          </section>
        </div>
      </div>
    </>
  );
}

function KeyLearningsItem({ children }: { children: string }) {
  return (
    <div className="flex gap-[20px] font-light text-[16px]">
      <BulletPoint className="mt-[8px] w-[14px] h-[8px] text-[#ECA22D] flex-shrink-0" />
      {children}
    </div>
  );
}

type CoreModulesItemProps = {
  module: string;
  children: string;
};

function CoreModulesItem({ module, children }: CoreModulesItemProps) {
  return (
    <div className="grid grid-cols-2 font-light text-[16px] border-b border-[#E6E6E6]">
      <h2 className="justify-self-start pb-[3px]">{module}</h2>
      <h2 className="justify-self-end">{children}</h2>
    </div>
  );
}
