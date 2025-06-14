import ImageExploreCourses from "@assets/images/explore-courses.png";
import { ArrowRightLongerA } from "../svg/ArrowsLonger";
import { Minus, Plus } from "../svg/Math";
import ExloreCoursesItem from "./ExploreCoursesItem";

export default function ExploreCourses() {
  return (
    <div className="relative pt-[69px] space-y-[69px]">
      {/* Header Section */}
      <div className="flex gap-[50px] flex-wrap xl:flex-nowrap items-center xl:gap-[109px] px-[32px] xl:px-[110px] text-black">
        <h1 className="text-[40px]">
          Explore <span className="text-[#ECA22D]">Our Courses</span>
        </h1>

        <div className="relative w-full max-w-[700px] h-[57px] flex items-center">
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full h-full py-[13px] ps-[35px] rounded-s-[25px] focus:outline-none bg-[#F0F0F0] font-light text-[15px] xl:text-[20px]"
          />
          <button className="h-full rounded-e-[25px] bg-[#879DA5] px-[25px] text-white flex items-center justify-center hover:bg-[#0C2D46] transition-colors duration-300 ease-out cursor-pointer">
            <ArrowRightLongerA />
          </button>
        </div>
      </div>

      {/* Content Section: Flex layout */}
      <div className="relative overflow-hidden flex justify-between 2xl:flex-row gap-[100px] text-white xl:text-black">
        {/* Left - Courses List */}
        <div className="space-y-[35px] my-[32px] me-[32px]">
          <div className="w-full space-y-[25px] ">
            <ExloreCoursesItem symbol={<Minus />}>
              Higher National Diploma
            </ExloreCoursesItem>

            <ul className="px-[32px] xl:px-[140px] space-y-[15px] text-[15px] xl:text-[20px] list-disc">
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

        <img
          src={ImageExploreCourses}
          className="absolute right-0 top-0 h-full w-full xl:w-[500px] object-cover z-[-1] brightness-50 bg-gray-100 xl:brightness-100 xl:bg-transparent"
        />
      </div>
    </div>
  );
}
