import IconLogo from "@assets/icons/logo.svg";
import { ArrowDown, ArrowUp } from "../svg/Arrows";

type NavProps = {
  programsOpen: boolean;
  setProgramsOpen: (value: boolean) => void;
  deMontPlusOpen: boolean;
  setDeMontPlusOpen: (value: boolean) => void;
};

export default function Nav({
  programsOpen,
  setProgramsOpen,
  deMontPlusOpen,
  setDeMontPlusOpen,
}: NavProps) {
  return (
    /* header container */
    <nav className="h-[111px] text-[16px] relative z-50 sticky top-[45px]">
      {/* header wrapper */}
      <div className="h-[81px] bg-[#F6F6F6] flex justify-between">
        {/* left container */}
        <section className="h-[111px] px-[23px] py-[20px] bg-[#F6F6F6] rounded-b-[40px] ms-[21px]">
          <a href="#" className="w-[234px] h-[71px]">
            <img src={IconLogo} />
          </a>
        </section>

        {/* right container */}
        <section className="flex items-center divide-x divide-[rgba(0,0,0,0.2)] me-[42px] whitespace-nowrap">
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
      </div>
    </nav>
  );
}

type NavRightItemProps = {
  href: string;
  children: string;
};

function NavRightItem({ href, children }: NavRightItemProps) {
  return (
    <a
      href={href}
      className="px-[25px] transition-colors duration-400 hover:text-[#ECA22D]"
    >
      {children}
    </a>
  );
}

type NavRightItemWithArrowProps = {
  href: string;
  onClick: (e: any) => void;
  children: string;
  state: boolean;
};

function NavRightItemWithArrow({
  href,
  onClick,
  children,
  state,
}: NavRightItemWithArrowProps) {
  return (
    <a
      href={href}
      className={`group relative px-[25px] flex items-center gap-[8px] ${
        state ? "text-[#ECA22D]" : "hover:text-[#ECA22D]"
      } transition-colors duration-300`}
      onClick={onClick}
    >
      {children}
      <span className="relative w-[10px] h-[13px]">
        <ArrowDown
          className={`absolute top-0 left-0 transition-opacity duration-300 ${
            state ? "opacity-0" : "opacity-100"
          }`}
        />
        <ArrowUp
          className={`absolute top-0 left-0 transition-opacity duration-300 ${
            state ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </a>
  );
}
