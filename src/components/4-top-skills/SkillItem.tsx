type SkillItemProps = {
  img: string;
  children: string;
};

export default function SkillItem({ img, children }: SkillItemProps) {
  return (
    <div className="flex items-center gap-[24px] w-[316px] h-[130px]">
      <img src={img} className="w-[130px]" />
      <span className="font-light text-[20px]">{children}</span>
    </div>
  );
}
