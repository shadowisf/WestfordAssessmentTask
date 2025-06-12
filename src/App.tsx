import { useState } from "react";
import Hero from "./components/2_hero/_Hero";
import ProgrammeOverview from "./components/3_programmeOverview/_ProgramOverview";
import TopSkillsYouWillLearn from "./components/4_topSkillsYouWillLearn/_TopSkillSYouWillLearn";
import JobOpportunities from "./components/5_jobOpportunities/_JobOpportunities";
import MinimumEligibility from "./components/6_minimumEligibility/MinimumEligibility";
import RelatedCourses from "./components/7_relatedCourses/RelatedCourses";

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

      <TopSkillsYouWillLearn />

      <JobOpportunities />

      <MinimumEligibility />

      <RelatedCourses />
    </>
  );
}
