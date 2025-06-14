type InquiryItemProps = {
  img: React.ReactNode;
  header: string;
  children: string;
  linkLabel: string;
};

export default function InquiryItem({
  img,
  header,
  children,
  linkLabel,
}: InquiryItemProps) {
  return (
    <div className="w-[237px] h-[213px] gap-[25px] font-[20px] flex flex-col items-center transition">
      <div className="flex items-center justify-center gap-[12px]">{img}</div>
      <div className="space-y-[10px] text-center">
        <p>{header}</p>
        <p className="font-extralight">{children}</p>
      </div>
      <a href="#" className="text-center">
        {linkLabel}
      </a>
    </div>
  );
}
