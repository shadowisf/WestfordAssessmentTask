import { ArrowDown, ArrowUp } from "../svg/Arrows";

type MobileNavModalProps = {
  isOpen: boolean;
  onClose: () => void;
  programsOpen: boolean;
  setProgramsOpen: (value: boolean) => void;
};

export default function MobileNavModal({
  isOpen,
  onClose,
  programsOpen,
  setProgramsOpen,
}: MobileNavModalProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F6F6F6] text-[18px] text-black z-[999] transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 overflow-y-auto h-full">
        {/* close button */}
        <button
          onClick={onClose}
          className="mb-6 text-right w-full text-[20px]"
        >
          ✕
        </button>

        <ul className="space-y-5">
          <li>
            <a href="#" onClick={onClose}>
              About Us
            </a>
          </li>

          <li>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              <span>Programs</span>
              {programsOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            {programsOpen && (
              <ul className="mt-3 ml-4 space-y-2 text-[16px]">
                <li>
                  <a href="#" onClick={onClose}>
                    Higher National Diploma
                  </a>
                </li>
                <li>
                  <a href="#" onClick={onClose}>
                    Foundation
                  </a>
                </li>
                <li>
                  <a href="#" onClick={onClose}>
                    Higher Education
                  </a>
                </li>
                <li>
                  <a href="#" onClick={onClose}>
                    CMI Level 5
                  </a>
                </li>
                <li>
                  <a href="#" onClick={onClose}>
                    Certification Programs
                  </a>
                </li>
                <li>
                  <a href="#" onClick={onClose}>
                    CPD
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" onClick={onClose}>
              Our Partners
            </a>
          </li>

          <li>
            <a href="#" onClick={onClose}>
              DeMont Plus
            </a>
          </li>

          <li>
            <a href="#" onClick={onClose}>
              Business Challenge
            </a>
          </li>

          <li>
            <a href="#" onClick={onClose}>
              Life at DeMont
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
