import AnimatedBulletpoint from "../svg/AnimatedBulletpoint";

export default function FooterListItem({ children }: { children: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-[9px] group text-[16px] font-light"
    >
      <AnimatedBulletpoint className="group-hover:text-[#ECA22D] transition-colors duration-300 ease-out transition-transform duration-300 ease-out origin-left group-hover:scale-x-[1.66]" />
      <span className="group-hover:translate-x-[6px] transition-transform duration-300 ease-out">
        {children}
      </span>
    </a>
  );
}
