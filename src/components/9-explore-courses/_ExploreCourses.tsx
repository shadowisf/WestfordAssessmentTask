import ImageExploreCourses from "@assets/images/explore-courses.png";
import { ArrowRightLongerA } from "../svg/ArrowsLonger";
import { Minus, Plus } from "../svg/Math";

export default function ExploreCourses() {
  return (
    <div className="pt-[69px] pb-[103px] space-y-[69px]">
      <div className="px-[114px] flex items-center gap-[109px]">
        <h1 className="text-[40px]">
          Explore <span className="text-[#ECA22D]">Our Courses</span>
        </h1>

        <div className="relative w-full max-w-[700px] h-[57px] flex items-center">
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full h-full py-[13px] px-[35px] rounded-s-[25px] focus:outline-none bg-[#F0F0F0] font-light text-[20px]"
          />
          <button className="h-full rounded-e-[25px] bg-[#879DA5] px-[25px] text-white flex items-center justify-center hover:bg-[#0C2D46] transition-colors duration-300 ease-out cursor-pointer">
            <ArrowRightLongerA />
          </button>
        </div>
      </div>

      <div className="flex gap-[176px] justify-between">
        <div className="space-y-[35px]">
          <div className="w-full space-y-[25px]">
            <ExloreCoursesItem symbol={<Minus />}>
              Higher National Diploma
            </ExloreCoursesItem>

            <ul className="ps-[140px] space-y-[15px] text-[20px] list-disc">
              <li>
                <span className="font-light">International In Computing</span>{" "}
                (Software Engineering)
              </li>
              <li>
                <span className="font-light">International in Computing</span>{" "}
                (Cyber Security)
              </li>
              <li>
                <span className="font-light">International In</span> Computing
              </li>
              <li>
                <span className="font-light">International in Business</span>{" "}
                (Business Management)
              </li>
              <li>
                <span className="font-light">International in Business</span>{" "}
                (Marketing)
              </li>
              <li>
                <span className="font-light">International in Business</span>{" "}
                (Accounting and Finance)
              </li>
              <li>
                <span className="font-light">International in Business</span>{" "}
                (Human Resource Management)
              </li>
            </ul>
          </div>

          <ExloreCoursesItem symbol={<Plus />}>Foundation</ExloreCoursesItem>
          <ExloreCoursesItem symbol={<Plus />}>
            Management and Leadership
          </ExloreCoursesItem>
          <ExloreCoursesItem symbol={<Plus />}>
            Teacher Education
          </ExloreCoursesItem>
          <ExloreCoursesItem symbol={<Plus />}>
            Certification Programs
          </ExloreCoursesItem>
        </div>

        <img src={ImageExploreCourses} className="max-w-[462px]" />
      </div>
    </div>
  );
}

type ExploreCoursesItemProps = {
  children: string;
  symbol: React.ReactNode;
};

function ExloreCoursesItem({ children, symbol }: ExploreCoursesItemProps) {
  return (
    <div className="w-full space-y-[25px]">
      <div className="flex justify-between items-center text-white ps-[115px] pe-[32px] w-full h-[57px] max-w-[802px] bg-[#0C2D46] rounded-e-[25px]">
        <h1 className="text-[20px]">{children}</h1>
        <button className="h-full cursor-pointer">{symbol}</button>
      </div>
    </div>
  );
}
