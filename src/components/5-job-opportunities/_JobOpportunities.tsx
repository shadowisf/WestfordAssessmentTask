import ImageJobOpportunities from "@assets/images/job-opportunities.png";
import JobOpportunityItem from "./JobOpportunityItem";

export default function JobOpportunities() {
  return (
    <div className="relative p-[32px] xl:p-[42px] flex md:text-black text-white">
      {/* left container */}
      <div className="space-y-[40px] md:w-[400px] lg:w-[600px] xl:w-[814px]">
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
        className="absolute right-0 top-0 h-full w-auto object-cover z-[-1] brightness-50 bg-gray-100 md:brightness-100 md:bg-transparent "
      />
    </div>
  );
}
