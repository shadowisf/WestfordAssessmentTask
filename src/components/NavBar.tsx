import { useState } from "react";
import IconEmail from "../assets/icons/email.svg";
import IconPhone from "../assets/icons/phone.svg";
import IconLogo from "../assets/icons/logo.svg";
import { ArrowDown, ArrowRight, ArrowUp } from "./svg/Arrows";
import ImageHigherNationalDiploma from "../assets/images/higher-national-diploma.png";
import ImageFoundation from "../assets/images/foundation.png";
import ImageTeacherEducation from "../assets/images/teacher-education.png";
import ImageCMILevel5 from "../assets/images/cmi-level-5-in-management-and-leadership.png";
import ImageCertificationPrograms from "../assets/images/certification-programs.png";
import ImageCPD from "../assets/images/continuing-professional-development-cpd.png";
import { ArrowRightMinimal } from "./svg/ArrowsMinimal";

export default function NavBar() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [deMontPlusOpen, setDeMontPlusOpen] = useState(false);

  return (
    <>
      {/* top bar */}
      <nav className="h-[45px] font-poppins text-[16px] text-[#FFFFFF] bg-[#0C2D46] flex items-center justify-between relative z-50 sticky top-0 ">
        {/* left container */}
        <section className="flex items-center gap-[50px]">
          <div className="flex items-center gap-[5px] ms-[42px]">
            <img src={IconEmail} />
            <a href="mailto:hello@demont.ac.ae">hello@demont.ac.ae</a>
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={IconPhone} />
            <a href="tel:800336668">800 33 666 8</a>
          </div>
        </section>

        {/* right container */}
        <section className="relative flex items-center gap-[50px]">
          <a href="#">Why Study in the UAE?</a>
          <a href="#">Our Blogs</a>
          <a href="#">Careers</a>
          <a
            href="#"
            className="block h-[45px] flex items-center gap-[5px] px-[25px] bg-[#ECA22D]"
          >
            Apply
            <ArrowRight />
          </a>
        </section>
      </nav>

      {/* header */}
      <nav className="h-[111px] font-poppins text-[16px] relative z-50 sticky top-[45px]">
        {/* header wrapper */}
        <section className="h-[81px] bg-[#F6F6F6] flex justify-between">
          {/* left container */}
          <div className="h-[111px] px-[23px] py-[20px] bg-[#F6F6F6] rounded-b-[40px] ms-[21px]">
            <a href="#" className="w-[234px] h-[71px]">
              <img src={IconLogo} />
            </a>
          </div>

          {/* right container */}
          <div className="flex items-center divide-x divide-[rgba(0,0,0,0.2)] me-[42px] whitespace-nowrap">
            <a
              href="#"
              className="px-[25px] transition-colors duration-400 hover:text-[#ECA22D]"
            >
              About Us
            </a>
            <a
              href="#"
              className={`group relative px-[25px] flex items-center gap-[8px] ${
                programsOpen ? "text-[#ECA22D]" : "hover:text-[#ECA22D]"
              } transition-colors duration-300`}
              onClick={(e) => {
                e.preventDefault();
                setDeMontPlusOpen(false);
                setProgramsOpen(!programsOpen);
              }}
            >
              Programs
              <span className="relative w-[10px] h-[13px]">
                <ArrowDown
                  className={`absolute top-0 left-0 transition-opacity duration-300 ${
                    programsOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <ArrowUp
                  className={`absolute top-0 left-0 transition-opacity duration-300 ${
                    programsOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </a>
            <a
              href="#"
              className="px-[25px] transition-colors duration-400 hover:text-[#ECA22D]"
            >
              Our Partners
            </a>
            <a
              href="#"
              className={`group relative px-[25px] flex items-center gap-[8px] ${
                deMontPlusOpen ? "text-[#ECA22D]" : "hover:text-[#ECA22D]"
              } transition-colors duration-300`}
              onClick={(e) => {
                e.preventDefault();
                setProgramsOpen(false);
                setDeMontPlusOpen(!deMontPlusOpen);
              }}
            >
              DeMont Plus
              <span className="relative w-[10px] h-[13px]">
                <ArrowDown
                  className={`absolute top-0 left-0 transition-opacity duration-300 ${
                    deMontPlusOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <ArrowUp
                  className={`absolute top-0 left-0 transition-opacity duration-300 ${
                    deMontPlusOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </a>
            <a
              href="#"
              className="px-[25px] transition-colors duration-400 hover:text-[#ECA22D]"
            >
              Business Challenge
            </a>
            <a
              href="#"
              className="px-[25px] transition-colors duration-400 hover:text-[#ECA22D]"
            >
              Life at DeMont
            </a>
          </div>
        </section>
      </nav>

      {/* programs modal */}
      <main
        className={`text-black font-poppins font-medium text-[18px] fixed top-[126px] left-0 w-full h-full bg-[linear-gradient(to_bottom,_#0C2D46_50%,_#0C2D46F2_56%,_#0C2D4600_100%)] transition duration-400 ${
          programsOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <section className="my-[77px] mx-[36px] grid grid-cols-6 gap-[30px] ">
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
      </main>
    </>
  );
}

function ZoomCard({ image, children }: { image: string; children: string }) {
  const [cardHovered, setCardHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <a
      href="#"
      className="relative w-[203px] h-[222px] rounded-[10px] overflow-hidden"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      {/* background image */}
      <img
        src={image}
        className={`absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-400 origin-bottom ${
          cardHovered ? "scale-115" : "scale-100"
        }`}
      />

      {/* text */}
      <div className="absolute inset-0 p-[20px] pointer-events-none">
        {children}
      </div>

      {/* arrow button */}
      <button
        className={`absolute bottom-0 right-0 w-[41px] h-[28px] my-[20px] flex justify-center items-center rounded-s-[15px] cursor-pointer transition-colors duration-400 ${
          buttonHovered ? "bg-[#0C2D46]" : "bg-[#ECA22D]"
        }`}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <ArrowRightMinimal
          className={buttonHovered ? "text-white" : "text-black"}
        />
      </button>
    </a>
  );
}
