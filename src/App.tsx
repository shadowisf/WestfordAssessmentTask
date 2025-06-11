import Hero from "./components/Hero";
import IconBrochure from "@assets/icons/brochure.svg";
import IconCurlyArrow from "@assets/icons/curly-arrow.svg";
import { useState } from "react";
import ImageWeirdContainer from "@assets/images/weird-container.svg";
import {
  ArrowBottomMinimal,
  ArrowRightMinimal,
} from "./components/svg/ArrowsMinimal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [phone, setPhone] = useState<string | undefined>(undefined);

  return (
    <main className="font-poppins font-medium mt-[-30px]">
      <Hero />

      <div className="ms-[45px] my-[64px] flex justify-between">
        <div className="space-y-[91px] text-[16px]">
          <section className="flex gap-[143px]">
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
            <div className="relative w-[500px] flex items-center">
              <a
                href="#"
                className={`flex flex-col transition-transform duration-300 ease-out ${
                  hovered ? "translate-x-2" : ""
                }`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="text-center ms-[20px] me-[6px]">
                  Apply Now
                </span>
                <span className="border-[2.5px] border-[#0C2D46] rounded" />
              </a>

              <img
                src={IconCurlyArrow}
                className={`absolute w-[500px] translate-x-[113px] translate-y-[28px] pointer-events-none transition-opacity duration-300 ease-out z-[-1] ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </section>

          <section>
            <h1 className="text-[40px]">
              <span>Programme</span>{" "}
              <span className="text-[#ECA22D]">Overview</span>
            </h1>

            <br />

            <p className="font-light text-[16px] w-[814px]">
              The Higher National Diploma International (HND) in Computing with
              a specialization in Software Engineering is a comprehensive
              program designed to equip students with the knowledge, skills, and
              practical experience needed to excel in the dynamic field of
              software development. This program focuses on preparing students
              for careers in designing, building, and maintaining software
              applications that meet modern technological and business demands.
            </p>

            <br />

            <p className="font-light text-[16px] w-[814px]">
              The Higher National Diploma International in Computing with a
              specialization in Software Engineering offers a comprehensive
              education in the ever-evolving field of software development.
              Through a blend of theoretical knowledge and hands-on experience,
              students are prepared to contribute effectively to the creation of
              innovative and practical software solutions, meeting the demands
              of modern technology-driven industries. This program serves as a
              gateway for those seeking to build a successful career in software
              engineering.
            </p>
          </section>
        </div>

        <div className="space-y-[26px]">
          <section className="text-right me-[45px]">
            <h1 className="text-[40px]">
              <span className="text-[#ECA22D]">Talk</span> to Our
            </h1>
            <h2 className="font-extralight text-[28px]">Admission Team</h2>
          </section>

          <section className="relative w-full h-full overflow-hidden ">
            <img
              src={ImageWeirdContainer}
              alt="Background"
              className="absolute inset-0 pointer-events-none"
            />

            <div className="relative font-medium p-[40px] text-[18px] space-y-[30px] w-[299px] h-[537px]">
              <div className="flex flex-col gap-[14px] w-[227px]">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your First & Last Names"
                  className="font-light border-b border-[#D0D4D6] placeholder-[#6D6D6D] text-[16px] pb-[5px]"
                />
              </div>

              <div className="flex flex-col gap-[14px] w-[227px]">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="font-light border-b border-[#D0D4D6] placeholder-[#6D6D6D] text-[16px] pb-[5px]"
                />
              </div>

              <div className="flex flex-col gap-[14px] w-[227px]">
                <label>Interested Course</label>
                <div className="relative w-full">
                  <select className="font-light border-b border-[#D0D4D6] text-[#6D6D6D] text-[16px] pb-[5px] appearance-none w-full pr-10">
                    <option value="">Select a Course</option>
                    <option value="">placeholder</option>
                    <option value="">placeholder</option>
                    <option value="">placeholder</option>
                  </select>

                  <ArrowBottomMinimal className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6D6D6D]" />
                </div>
              </div>

              <div className="flex flex-col gap-[14px] w-[227px]">
                <label>Phone</label>
                <PhoneInput
                  defaultCountry="AE"
                  name="phone"
                  placeholder="+971"
                  value={phone}
                  onChange={setPhone}
                  className="border-b border-[#D0D4D6] pb-[5px] focus:outline-none text-[16px] font-light"
                  required
                  autoComplete="off"
                />
              </div>

              <button className="group w-[254px] h-[38px] ps-[34px] cursor-pointer rounded-s-[15px] transition-colors duration-300 ease-out hover:bg-[#879DA5] bg-[#ECA22D] flex items-center gap-[9px] text-[16px] text-white font-semibold">
                Schedule a Call
                <ArrowRightMinimal className="text-black transition-transform duration-300 ease-out group-hover:text-white group-hover:translate-x-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
