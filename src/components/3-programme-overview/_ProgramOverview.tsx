import IconBrochure from "@assets/icons/brochure.svg";
import IconCurlyArrow from "@assets/icons/curly-arrow.svg";
import AdmissionTeamForm from "./AdmissionTeamForm";
import { useState } from "react";
import AdmissionTeamFormModal from "./AdmissionTeamFormModal";

export default function ProgrammeOverview() {
  const [applyNowHovered, setApplyNowHovered] = useState(false);
  const [admissionFormModalOpen, setAdmissionFormModalOpen] = useState(false);

  return (
    <div className="my-[64px] flex justify-between">
      <div className="space-y-[91px] text-[16px]">
        <section className="mx-[45px] flex flex-wrap justify-center xl:justify-start gap-[50px] xl:gap-[100px] 2xl:gap-[143px]">
          {/* get brochure link */}
          <a
            href="#"
            className="group flex gap-[20px] items-center cursor-pointer"
          >
            <div className="flex flex-col transition-transform duration-300 ease-out group-hover:translate-x-2">
              <span className="text-center ms-[20px] me-[6px]">
                Get Brochure
              </span>
              <span className="border-[2.5px] border-[#0C2D46] rounded" />
            </div>

            <img src={IconBrochure} />
          </a>

          {/* apply now link */}
          <div className="relative 2xl:w-[500px] flex items-center">
            <a
              href="#"
              className={`hidden 2xl:flex flex-col transition-transform duration-300 ease-out ${
                applyNowHovered ? "translate-x-2" : ""
              }`}
              onMouseEnter={() => setApplyNowHovered(true)}
              onMouseLeave={() => setApplyNowHovered(false)}
            >
              <span className="text-center ms-[20px] me-[6px]">Apply Now</span>
              <span className="border-[2.5px] border-[#0C2D46] rounded" />
            </a>

            <a
              onClick={() => setAdmissionFormModalOpen(true)}
              className={`flex 2xl:hidden flex-col transition-transform duration-300 ease-out ${
                applyNowHovered ? "translate-x-2" : ""
              }`}
              onMouseEnter={() => setApplyNowHovered(true)}
              onMouseLeave={() => setApplyNowHovered(false)}
            >
              <span className="text-center ms-[20px] me-[6px]">Apply Now</span>
              <span className="border-[2.5px] border-[#0C2D46] rounded" />
            </a>

            <img
              src={IconCurlyArrow}
              className={`hidden 2xl:block absolute w-[500px] translate-x-[113px] translate-y-[28px] pointer-events-none transition-opacity duration-300 ease-out z-[-1] ${
                applyNowHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </section>

        <section className="mx-[45px]">
          <h1 className="text-[40px]">
            <span>Programme</span>{" "}
            <span className="text-[#ECA22D]">Overview</span>
          </h1>

          <br />

          <p className="font-light text-[16px] xl:w-[814px]">
            The Higher National Diploma International (HND) in Computing with a
            specialization in Software Engineering is a comprehensive program
            designed to equip students with the knowledge, skills, and practical
            experience needed to excel in the dynamic field of software
            development. This program focuses on preparing students for careers
            in designing, building, and maintaining software applications that
            meet modern technological and business demands.
          </p>

          <br />

          <p className="font-light text-[16px] xl:w-[814px]">
            The Higher National Diploma International in Computing with a
            specialization in Software Engineering offers a comprehensive
            education in the ever-evolving field of software development.
            Through a blend of theoretical knowledge and hands-on experience,
            students are prepared to contribute effectively to the creation of
            innovative and practical software solutions, meeting the demands of
            modern technology-driven industries. This program serves as a
            gateway for those seeking to build a successful career in software
            engineering.
          </p>
        </section>
      </div>

      <AdmissionTeamFormModal
        admissionTeamFormModalOpen={admissionFormModalOpen}
        setAdmissionTeamFormModalOpen={setAdmissionFormModalOpen}
      />

      <AdmissionTeamForm />
    </div>
  );
}
