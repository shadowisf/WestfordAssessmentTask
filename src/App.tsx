import { useState } from "react";
import Hero from "./components/2-hero/_Hero";
import ProgrammeOverview from "./components/3-programme-overview/_ProgramOverview";
import TopSkillsYouWillLearn from "./components/4-top-skills/_TopSkillSYouWillLearn";
import JobOpportunities from "./components/5-job-opportunities/_JobOpportunities";
import MinimumEligibility from "./components/6-minimum-eligibility/_MinimumEligibility";
import RelatedCourses from "./components/7-related-courses/_RelatedCourses";
import AcademicPartners from "./components/8-academic-partners/_AcademicPartners";
import ExploreCourses from "./components/9-explore-courses/_ExploreCourses";
import IconDeMontLogo from "@assets/icons/demont-logo.svg";
import Search from "./components/svg/Search";
import AnimatedPhoneCircled from "./components/svg/PhoneCircled";
import AnimatedChat from "./components/svg/Chat";

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

      <AcademicPartners />

      <ExploreCourses />

      <div className="grid grid-cols-3 py-[93px] px-[225px] bg-[#F5FAFC] place-items-center">
        <InquiryItem
          img={
            <>
              <img src={IconDeMontLogo} />
              <AnimatedPhoneCircled />
            </>
          }
          header="Got question? Let's talk!"
          linkLabel="Contact Us"
        >
          +971 4 580 4285
        </InquiryItem>
        <InquiryItem
          img={<Search />}
          header="Want to know more?"
          linkLabel="Learn More"
        >
          Let's find out!
        </InquiryItem>
        <InquiryItem
          img={<AnimatedChat />}
          header="We are here to guide you"
          linkLabel="Chat with an Admission Counselor"
        >
          +971 58 625 0566
        </InquiryItem>
      </div>
    </>
  );
}

type InquiryItemProps = {
  img: React.ReactNode;
  header: string;
  children: string;
  linkLabel: string;
};

function InquiryItem({ img, header, children, linkLabel }: InquiryItemProps) {
  return (
    <div className="w-[237px] h-[213px] gap-[25px] font-[20px] flex flex-col items-center transition">
      <div className="flex items-center justify-center gap-[12px]">{img}</div>
      <div className="space-y-[10px] text-center">
        <p>{header}</p>
        <p className="font-extralight">{children}</p>
      </div>
      <a href="#" className="text-center">
        {linkLabel}
      </a>
    </div>
  );
}
