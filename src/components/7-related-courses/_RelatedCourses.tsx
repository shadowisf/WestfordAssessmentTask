import ImageHNDCybersecurity from "@assets/images/hnd-cybersecurity.png";
import ImagePearsonLogo from "@assets/images/pearson-logo.png";
import ImageHNDComputing from "@assets/images/hnd-computing.png";
import ImageBTECExtendedIT from "@assets/images/btec-extended-it.png";
import ImageBTECFoundationIT from "@assets/images/btec-foundation-it.png";
import { ArrowRightLongerA, ArrowRightLongerB } from "../svg/ArrowsLonger";
import IconClock from "@assets/icons/clock.svg";
import IconGraphUp from "@assets/icons/graph-up.svg";
import IconBlocks from "@assets/icons/blocks.svg";
import IconStar from "@assets/icons/star.svg";
import { ArrowRightMinimal } from "../svg/ArrowsMinimal";

export default function RelatedCourses() {
  return (
    <div className="px-[42px] pb-[69px] space-y-[47px] pb-[69px]">
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

type RelatedCoursesItemProps = {
  img: string;
  children: string;
  duration: string;
  level: string;
  credits?: string;
  modules: string;
};

function RelatedCoursesItem({
  img,
  children,
  duration,
  level,
  credits,
  modules,
}: RelatedCoursesItemProps) {
  return (
    <a
      href="#"
      className="group relative w-[308px] h-[363px] rounded-[25px] bg-[#F5F5F5]"
    >
      {/* description */}
      <section className="p-[15px] space-y-[16px] h-[172px] group-hover:p-[25px] transition-padding duration-300 ease-out">
        <img className="w-[150px]" src={ImagePearsonLogo} />
        <span className="font-light text-[18px]">{children}</span>
      </section>

      {/* gradient and button */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-full h-[57px]  mt-[19px] bg-[linear-gradient(to_bottom,_rgb(245_245_245/1)_0%,_rgb(247_247_247/0.8)_39%,_rgb(247_247_247/0)_100%)] flex justify-end group-hover:opacity-0 transition-opacity duration-300 ease-out">
        <span className="w-[67px] h-[28px] bg-[#ECA22D] rounded-[15px] flex items-center justify-center ps-[26px] pe-[8px] me-[9px]">
          <ArrowRightLongerA className="text-white" />
        </span>
      </div>

      <div className="absolute left-0 bottom-0 right-0 text-[12px] opacity-0 pb-[20px] group-hover:opacity-100 transition-opacity duration-300 ease-out space-y-[31px] z-[10]">
        {/* course stats grid */}
        <div className="grid grid-cols-2 gap-y-[23px] gap-x-[30px] px-[25px] ">
          <div className="flex items-center gap-[7px]">
            <img className="w-[25px]" src={IconClock} />
            <div>
              <h3 className="font-light">Duration</h3>
              <span>{duration}</span>
            </div>
          </div>
          <div className="flex gap-[7px]">
            <img className="w-[25px]" src={IconGraphUp} />
            <div>
              <h3 className="font-light">Course Level</h3>
              <span>{level}</span>
            </div>
          </div>
          {credits && (
            <div className="flex gap-[7px]">
              <img className="w-[25px]" src={IconStar} />
              <div>
                <h3 className="font-light">Credits</h3>
                <span>{credits}</span>
              </div>
            </div>
          )}
          <div className="flex gap-[7px]">
            <img className="w-[25px]" src={IconBlocks} />
            <div>
              <h3 className="font-light">Modules</h3>
              <span>{modules}</span>
            </div>
          </div>
        </div>

        {/* know more button */}
        {/* used css selectors to create the hover effect cuz of overlapping of group hover */}
        <div className="group display flex justify-end">
          <button className="knowMoreButton px-[28px] py-[8px] bg-[#ECA22D] rounded-s-[15px] flex gap-[7px] items-center cursor-pointer text-white hover:bg-[#0C2D46] transition-colors duration-300 ease-out text-[16px] font-semibold">
            Know More
            <ArrowRightMinimal />
          </button>
        </div>
      </div>

      {/* course image */}
      <img
        src={img}
        className="w-full transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
    </a>
  );
}
