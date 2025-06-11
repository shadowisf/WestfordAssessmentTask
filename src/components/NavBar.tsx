import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import logoIcon from "../assets/logo.svg";
import { ArrowDown, ArrowRight, ArrowUp } from "./svg/Arrows";
import { useState } from "react";

export default function NavBar() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [deMontPlusOpen, setDeMontPlusOpen] = useState(false);

  return (
    <>
      {/* top bar */}
      <nav className="h-[45px] font-poppins text-[16px] text-[#FFFFFF] bg-[#0C2D46] flex items-center justify-between relative z-50 sticky top-0">
        {/* left container */}
        <section className="flex items-center gap-[50px]">
          <div className="flex items-center gap-[5px] ms-[42px]">
            <img src={emailIcon} />
            <a href="mailto:hello@demont.ac.ae">hello@demont.ac.ae</a>
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={phoneIcon} />
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
        <div className="h-[81px] bg-[#F6F6F6] flex justify-between gap-[191px]">
          {/* left container */}
          <section className="h-[111px] px-[23px] py-[20px] bg-[#F6F6F6] rounded-b-[40px] ms-[21px]">
            <a href="">
              <img src={logoIcon} className="w-[234px] h-[71px]" />
            </a>
          </section>

          {/* right container */}
          <section className="flex items-center divide-x divide-[rgba(0,0,0,0.2)] me-[42px]">
            <a
              href="#"
              className="px-[25px] transition duration-400 hover:text-[#ECA22D]"
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
              className="px-[25px] transition duration-400 hover:text-[#ECA22D]"
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
              className="px-[25px] transition duration-400 hover:text-[#ECA22D]"
            >
              Business Challenge
            </a>
            <a
              href="#"
              className="px-[25px] transition duration-400 hover:text-[#ECA22D]"
            >
              Life at DeMont
            </a>
          </section>
        </div>
      </nav>

      {/* programs modal */}
      {programsOpen && (
        <main className="fixed top-[126px] left-0 w-full h-full bg-red-500">
          asdasdasda
        </main>
      )}
    </>
  );
}
