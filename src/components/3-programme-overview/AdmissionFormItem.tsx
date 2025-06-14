type AdmissionFormItemProps = {
  children: string;
  placeholder: string;
  className?: string;
};

export default function AdmissionFormItem({
  children,
  placeholder,
  className,
}: AdmissionFormItemProps) {
  return (
    <div className={`flex flex-col gap-[14px] w-[227px] ${className}`}>
      <label>{children}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="font-light border-b border-[#D0D4D6] placeholder-[#6D6D6D] text-[16px] pb-[5px] focus:outline-none"
        required
      />
    </div>
  );
}
