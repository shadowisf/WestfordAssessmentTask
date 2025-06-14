import IconLogo from "@assets/icons/demont-logo-full.svg";
import IconHamburger from "@assets/icons/hamburger.svg";
import { useState } from "react";
import MobileNavModal from "./MobileNavModal";
import ProgramsModal from "./ProgramsModal";
import NavRightItem from "./NavRightItem";
import NavRightItemWithArrow from "./NavRightItemWithArrow";

export default function Nav() {
  const [deMontPlusOpen, setDeMontPlusOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    /* header container */
    <>
      <nav className="h-[111px] text-[16px] relative z-50 sticky top-[68px]  sm:top-[45px]">
        {/* header wrapper */}
        <div className="h-[81px] bg-[#F6F6F6] flex justify-between">
          {/* left container */}
          <section className="h-[111px] px-[23px] py-[20px] bg-[#F6F6F6] rounded-b-[40px] ms-2 xl:ms-[21px] flex-shrink-0">
            <a href="#">
              <img src={IconLogo} className="w-[234px] h-[71px] " />
            </a>
          </section>

          {/* right container */}
          <section className="hidden xl:flex items-center divide-x divide-[rgba(0,0,0,0.2)] me-[42px] whitespace-nowrap">
            <NavRightItem href="#">About Us</NavRightItem>
            <NavRightItemWithArrow
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setDeMontPlusOpen(false);
                setProgramsOpen(!programsOpen);
              }}
              state={programsOpen}
            >
              Programs
            </NavRightItemWithArrow>
            <NavRightItem href="#">Our Partners</NavRightItem>
            <NavRightItemWithArrow
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setProgramsOpen(false);
                setDeMontPlusOpen(!deMontPlusOpen);
              }}
              state={deMontPlusOpen}
            >
              DeMont Plus
            </NavRightItemWithArrow>
            <NavRightItem href="#">Business Challenge</NavRightItem>
            <NavRightItem href="#">Life at DeMont</NavRightItem>
          </section>

          <button
            className="visible xl:hidden cursor-pointer me-8"
            onClick={() => setMobileNavOpen(true)}
          >
            <img src={IconHamburger} className="w-[32px]" />
          </button>
        </div>
      </nav>

      <ProgramsModal
        programsOpen={programsOpen}
        setProgramsOpen={setProgramsOpen}
      />

      <MobileNavModal
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        programsOpen={programsOpen}
        setProgramsOpen={setProgramsOpen}
      />
    </>
  );
}
