import ImageJobOpportunities from "@assets/images/job-opportunities.png";
import BulletPoint from "../svg/BulletPoint";

export default function JobOpportunities() {
  return (
    <div className="relative p-[42px] flex">
      {/* left container */}
      <div className="space-y-[40px] w-[814px]">
        <section className="space-y-[20px]">
          <h1 className="text-[40px]">
            <span className="text-[#ECA22D]">Job</span> Opportunities
          </h1>

          <p className="font-light text-[16px]">
            Graduates of the Higher National Diploma International (HND) in
            Computing (Software Engineering) are well-equipped to pursue a wide
            range of job opportunities in the dynamic field of software
            development. The skills gained through this program open doors to
            various roles across industries that rely on technology and software
            solutions.
          </p>
        </section>

        <section className="space-y-[20px]">
          <h2 className="text-[24px]">
            <span className="font-light">Here are some of the</span> job
            opportunities for graduates:
          </h2>

          <JobOpportunityItem>Software Developer</JobOpportunityItem>
          <JobOpportunityItem>Web Developer</JobOpportunityItem>
          <JobOpportunityItem>Quality Assurance Engineer</JobOpportunityItem>
          <JobOpportunityItem>Database Developer</JobOpportunityItem>
          <JobOpportunityItem>Software Tester</JobOpportunityItem>
          <JobOpportunityItem>Technical Support Engineer</JobOpportunityItem>
        </section>
      </div>

      {/* background image */}
      <img
        src={ImageJobOpportunities}
        className="absolute right-0 top-0 h-full w-auto object-cover z-[-1]"
      />
    </div>
  );
}

function JobOpportunityItem({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-[20px] font-light text-[16px]">
      {/* <div className="w-[14px] h-[1px] border-[3px] border-[#879DA5] rounded" /> */}
      <BulletPoint className="w-[14px] h-[8px] text-[#879DA5]" />
      {children}
    </div>
  );
}
