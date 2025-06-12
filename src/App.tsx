import { useState } from "react";
import Hero from "./components/2_hero/Hero";
import ProgrammeOverview from "./components/3_programmeOverview/_ProgramOverview";
import TopSkillsYouWillLearn from "./components/4_topSkillsYouWillLearn/TopSkillSYouWillLearn";
import JobOpportunities from "./components/5_jobOpportunities/JobOpportunities";

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
    </>
  );
}
