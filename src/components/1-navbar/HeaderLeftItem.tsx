type HeaderLeftItemProps = {
  img: string;
  href: string;
  children: string;
};

export default function HeaderLeftItem({
  img,
  href,
  children,
}: HeaderLeftItemProps) {
  return (
    <div className="flex items-center gap-[5px]">
      <img src={img} />
      <a href={href}>{children}</a>
    </div>
  );
}
