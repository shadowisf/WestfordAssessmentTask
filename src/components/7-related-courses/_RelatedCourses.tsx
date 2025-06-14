import ImageHNDCybersecurity from "@assets/images/hnd-cybersecurity.png";
import ImageHNDComputing from "@assets/images/hnd-computing.png";
import ImageBTECExtendedIT from "@assets/images/btec-extended-it.png";
import ImageBTECFoundationIT from "@assets/images/btec-foundation-it.png";
import { ArrowRightLongerB } from "../svg/ArrowsLonger";
import RelatedCoursesItem from "./RelatedCoursesItem";

export default function RelatedCourses() {
  return (
    <div className="px-[32px] xl:px-[42px] pb-[69px] space-y-[47px] pb-[69px]">
      <h1 className="text-[40px]">
        Related <span className="text-[#ECA22D]">Courses</span>
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[75px] place-items-center">
        <RelatedCoursesItem
          img={ImageHNDCybersecurity}
          duration="24 Months"
          level="Level 5"
          credits="240"
          modules="15"
        >
          Higher National Diploma International in Computing (Cyber Security)
        </RelatedCoursesItem>
        <RelatedCoursesItem
          img={ImageHNDComputing}
          duration="24 Months"
          level="Level 5"
          credits="240"
          modules="15"
        >
          Higher National Diploma International in Computing
        </RelatedCoursesItem>
        <RelatedCoursesItem
          img={ImageBTECFoundationIT}
          duration="12 Months"
          level="Level 3"
          modules="07"
        >
          BTEC International Level 3 Foundation-Diploma in Information
          Technology
        </RelatedCoursesItem>
        <RelatedCoursesItem
          img={ImageBTECExtendedIT}
          duration="15-18 Months"
          level="Level 3"
          modules="15"
        >
          BTEC International Level 3 Extended Diploma in Information Technology
        </RelatedCoursesItem>
      </section>

      <a
        href="#"
        className="group flex items-center gap-[9px] relative text-[24px]"
      >
        <span className="font-light">Explore</span> All Programs
        <span className="relative">
          <ArrowRightLongerB />
          <span className="absolute w-[21px] h-[21px] transform group-hover:scale-[1.5] rounded-full bg-[#879DA5] -right-[6px] top-1/2 -translate-y-1/2 z-[-1] transition-transform duration-300 ease-out origin-center" />
        </span>
      </a>
    </div>
  );
}
