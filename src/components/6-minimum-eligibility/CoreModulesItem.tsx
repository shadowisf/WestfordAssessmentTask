type CoreModulesItemProps = {
  module: string;
  children: string;
};

export default function CoreModulesItem({
  module,
  children,
}: CoreModulesItemProps) {
  return (
    <div className="grid grid-cols-2 font-light text-[16px] border-b border-[#E6E6E6]">
      <h2 className="justify-self-start pb-[3px]">{module}</h2>
      <h2 className="justify-self-end">{children}</h2>
    </div>
  );
}
