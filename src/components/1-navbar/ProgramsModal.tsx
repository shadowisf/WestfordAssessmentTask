import ImageHigherNationalDiploma from "@assets/images/higher-national-diploma.png";
import ImageFoundation from "@assets/images/foundation.png";
import ImageTeacherEducation from "@assets/images/teacher-education.png";
import ImageCMILevel5 from "@assets/images/cmi-level-5-in-management-and-leadership.png";
import ImageCertificationPrograms from "@assets/images/certification-programs.png";
import ImageCPD from "@assets/images/continuing-professional-development-cpd.png";
import { ArrowRightMinimal } from "../svg/ArrowsMinimal";

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
        <ZoomCard image={ImageHigherNationalDiploma}>
          Higher National Diploma
        </ZoomCard>
        <ZoomCard image={ImageFoundation}>Foundation</ZoomCard>
        <ZoomCard image={ImageTeacherEducation}>Higher Education</ZoomCard>
        <ZoomCard image={ImageCMILevel5}>
          CMI Level 5 in Management and Leadership
        </ZoomCard>
        <ZoomCard image={ImageCertificationPrograms}>
          Certification Programs
        </ZoomCard>
        <ZoomCard image={ImageCPD}>
          Continuing Professional Development (CPD)
        </ZoomCard>
      </section>
    </div>
  );
}

type ZoomCardProps = {
  image: string;
  children: string;
};

function ZoomCard({ image, children }: ZoomCardProps) {
  return (
    <a
      href="#"
      className="group relative w-[203px] h-[222px] rounded-[10px] overflow-hidden"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* background Image */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-300 ease-in-out origin-bottom group-hover:scale-[1.15]"
      />

      {/* text */}
      <div className="absolute inset-0 p-[20px] pointer-events-none">
        {children}
      </div>

      {/* arrow button */}
      <button
        className="absolute bottom-0 right-0 w-[41px] h-[28px] my-[20px] flex justify-center items-center rounded-s-[15px] cursor-pointer bg-[#ECA22D] text-black transition-colors duration-300 ease-in-out hover:bg-[#0C2D46] hover:text-white"
        onMouseEnter={(e) => {
          e.currentTarget.closest("a")?.classList.add("hovered");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.closest("a")?.classList.remove("hovered");
        }}
      >
        <ArrowRightMinimal />
      </button>
    </a>
  );
}
