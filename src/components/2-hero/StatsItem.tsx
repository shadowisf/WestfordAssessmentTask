type StatItemProps = {
  img: string;
  header: string;
  children: string;
};

export default function StatsItem({ img, header, children }: StatItemProps) {
  return (
    <div className="flex items-center gap-[10px]">
      <img src={img} />
      <div className="space-y-[2px] text-[14px]">
        <h3 className="font-light">{header}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
