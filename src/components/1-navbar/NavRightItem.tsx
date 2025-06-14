type NavRightItemProps = {
  href: string;
  children: string;
};

export default function NavRightItem({ href, children }: NavRightItemProps) {
  return (
    <a
      href={href}
      className="px-[25px] transition-colors duration-300 ease-out hover:text-[#ECA22D]"
    >
      {children}
    </a>
  );
}
