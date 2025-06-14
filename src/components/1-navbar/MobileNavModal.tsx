import { ArrowDown, ArrowUp } from "../svg/Arrows";
import IconClose from "@assets/icons/close.svg";

type MobileNavModalProps = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (value: boolean) => void;
  programsOpen: boolean;
  setProgramsOpen: (value: boolean) => void;
  deMontPlusOpen: boolean;
  setDeMontPlusOpen: (value: boolean) => void;
};

export default function MobileNavModal({
  mobileNavOpen,
  setMobileNavOpen,
  programsOpen,
  setProgramsOpen,
  deMontPlusOpen,
  setDeMontPlusOpen,
}: MobileNavModalProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white text-[18px] text-black z-[999] transition-all duration-300 ease-in-out ${
        mobileNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 overflow-y-auto h-full">
        {/* close button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setMobileNavOpen(false)}
            className="cursor-pointer text-[20px]"
          >
            <img src={IconClose} alt="Close" />
          </button>
        </div>

        <ul className="space-y-5">
          <li>
            <a
              href="#"
              className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
            >
              About Us
            </a>
          </li>

          <li>
            <button
              className="cursor-pointer flex items-center justify-between w-full hover:text-[#ECA22D] transition-colors duration-300 ease-out"
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              <span>Programs</span>
              {programsOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            {programsOpen && (
              <ul className="mt-3 ml-4 space-y-2 text-[16px]">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    Higher National Diploma
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    Higher Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    CMI Level 5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    Certification Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                  >
                    CPD
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
            >
              Our Partners
            </a>
          </li>

          <li>
            <button
              className="cursor-pointer flex items-center justify-between w-full hover:text-[#ECA22D] transition-colors duration-300 ease-out"
              onClick={() => setDeMontPlusOpen(!deMontPlusOpen)}
            >
              <span>DeMont Plus</span>
              {deMontPlusOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
            >
              Business Challenge
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#ECA22D] transition-colors duration-300 ease-out"
            >
              Life at DeMont
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
