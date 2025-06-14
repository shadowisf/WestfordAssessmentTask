import { ArrowDown, ArrowUp } from "../svg/Arrows";

type NavRightItemWithArrowProps = {
  href: string;
  onClick: (e: any) => void;
  children: string;
  state: boolean;
};

export default function NavRightItemWithArrow({
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
      } transition-colors duration-300 ease-out`}
      onClick={onClick}
    >
      {children}
      <span className="relative w-[10px] h-[13px]">
        <ArrowDown
          className={`absolute top-0 left-0 transition-opacity duration-300 ease-out ${
            state ? "opacity-0" : "opacity-100"
          }`}
        />
        <ArrowUp
          className={`absolute top-0 left-0 transition-opacity duration-300 ease-out ${
            state ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </a>
  );
}
