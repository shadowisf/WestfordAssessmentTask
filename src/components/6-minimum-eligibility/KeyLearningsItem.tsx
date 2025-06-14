import BulletPoint from "../svg/BulletPoint";

export default function KeyLearningsItem({ children }: { children: string }) {
  return (
    <div className="flex gap-[20px] font-light text-[16px]">
      <BulletPoint className="mt-[8px] w-[14px] h-[8px] text-[#ECA22D] flex-shrink-0" />
      {children}
    </div>
  );
}
