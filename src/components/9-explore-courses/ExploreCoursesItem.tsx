type ExploreCoursesItemProps = {
  children: string;
  symbol: React.ReactNode;
};

export default function ExloreCoursesItem({
  children,
  symbol,
}: ExploreCoursesItemProps) {
  return (
    <div className="w-full space-y-[25px]">
      <div className="flex justify-between items-center text-white ps-[32px] xl:ps-[115px] pe-[32px] w-full h-[57px] max-w-[802px] bg-[#0C2D46] rounded-e-[25px]">
        <h1 className="text-[15px] xl:text-[20px]">{children}</h1>
        <button className="h-full cursor-pointer">{symbol}</button>
      </div>
    </div>
  );
}
