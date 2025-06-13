import { useState } from "react";
import Hero from "./components/2-hero/_Hero";
import ProgrammeOverview from "./components/3-programme-overview/_ProgramOverview";
import TopSkillsYouWillLearn from "./components/4-top-skills/_TopSkillSYouWillLearn";
import JobOpportunities from "./components/5-job-opportunities/_JobOpportunities";
import MinimumEligibility from "./components/6-minimum-eligibility/_MinimumEligibility";
import RelatedCourses from "./components/7-related-courses/_RelatedCourses";
import AcademicPartners from "./components/8-academic-partners/_AcademicPartners";
import ExploreCourses from "./components/9-explore-courses/_ExploreCourses";
import InquiryPanel from "./components/10-inquiry-panel/_InquiryPanel";
import Footer from "./components/11-footer/_Footer";

export default function App() {
  const [applyNowHovered, setApplyNowHovered] = useState(false);
  const [formPhone, setFormPhone] = useState<string | undefined>(undefined);
  const [footerCheckboxChecked, setFooterCheckboxChecked] = useState(false);

  return (
    <>
      <Hero />

      {/* <ProgrammeOverview
        applyNowHovered={applyNowHovered}
        setApplyNowHovered={setApplyNowHovered}
        phone={formPhone}
        setPhone={setFormPhone}
      />

      <TopSkillsYouWillLearn />

      <JobOpportunities />

      <MinimumEligibility />

      <RelatedCourses />

      <AcademicPartners />

      <ExploreCourses />

      <InquiryPanel />

      <Footer
        footerCheckboxChecked={footerCheckboxChecked}
        setFooterCheckboxChecked={setFooterCheckboxChecked}
      /> */}
    </>
  );
}
