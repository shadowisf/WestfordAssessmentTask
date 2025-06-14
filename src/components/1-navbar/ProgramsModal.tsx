import ImageHigherNationalDiploma from "@assets/images/higher-national-diploma.png";
import ImageFoundation from "@assets/images/foundation.png";
import ImageTeacherEducation from "@assets/images/teacher-education.png";
import ImageCMILevel5 from "@assets/images/cmi-level-5-in-management-and-leadership.png";
import ImageCertificationPrograms from "@assets/images/certification-programs.png";
import ImageCPD from "@assets/images/continuing-professional-development-cpd.png";
import ProgramsZoomCard from "./ProgramsZoomCard";

type ProgramsModalProps = {
  programsOpen: boolean;
  setProgramsOpen: (value: boolean) => void;
};

export default function ProgramsModal({
  programsOpen,
  setProgramsOpen,
}: ProgramsModalProps) {
  return (
    /* programs modal container */
    <div
      className={`text-black text-[18px] fixed top-[126px] left-0 w-full h-full bg-[linear-gradient(to_bottom,_#0C2D46_50%,_#0C2D46F2_56%,_#0C2D4600_100%)] transition duration-300 ease-in-out z-5 ${
        programsOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setProgramsOpen(false)}
    >
      {/* cards grid */}
      <section className="my-[77px] mx-[36px] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[30px] place-items-center">
        <ProgramsZoomCard image={ImageHigherNationalDiploma}>
          Higher National Diploma
        </ProgramsZoomCard>
        <ProgramsZoomCard image={ImageFoundation}>Foundation</ProgramsZoomCard>
        <ProgramsZoomCard image={ImageTeacherEducation}>
          Higher Education
        </ProgramsZoomCard>
        <ProgramsZoomCard image={ImageCMILevel5}>
          CMI Level 5 in Management and Leadership
        </ProgramsZoomCard>
        <ProgramsZoomCard image={ImageCertificationPrograms}>
          Certification Programs
        </ProgramsZoomCard>
        <ProgramsZoomCard image={ImageCPD}>
          Continuing Professional Development (CPD)
        </ProgramsZoomCard>
      </section>
    </div>
  );
}
