import BulletPoint from "../svg/BulletPoint";

export default function JobOpportunityItem({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-[20px] font-light text-[16px]">
      <BulletPoint className="w-[14px] h-[8px] text-[#879DA5]" />
      {children}
    </div>
  );
}
