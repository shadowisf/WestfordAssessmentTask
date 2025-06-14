type CourseDrawerSectionProps = {
  open: boolean;
  children: React.ReactNode;
};

export default function CourseDrawerSection({
  open,
  children,
}: CourseDrawerSectionProps) {
  return (
    <div
      className={`
        overflow-hidden transition-all duration-300 ease-out
        ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      {children}
    </div>
  );
}
