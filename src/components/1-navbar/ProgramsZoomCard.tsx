import { ArrowRightMinimal } from "../svg/ArrowsMinimal";

type ProgramsZoomCardProps = {
  image: string;
  children: string;
};

export default function ProgramsZoomCard({
  image,
  children,
}: ProgramsZoomCardProps) {
  return (
    <a
      href="#"
      className="group relative w-[203px] h-[222px] rounded-[10px] overflow-hidden"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* background Image */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-300 ease-in-out origin-bottom group-hover:scale-[1.15]"
      />

      {/* text */}
      <div className="absolute inset-0 p-[20px] pointer-events-none">
        {children}
      </div>

      {/* arrow button */}
      <button
        className="absolute bottom-0 right-0 w-[41px] h-[28px] my-[20px] flex justify-center items-center rounded-s-[15px] cursor-pointer bg-[#ECA22D] text-black transition-colors duration-300 ease-in-out hover:bg-[#0C2D46] hover:text-white"
        onMouseEnter={(e) => {
          e.currentTarget.closest("a")?.classList.add("hovered");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.closest("a")?.classList.remove("hovered");
        }}
      >
        <ArrowRightMinimal />
      </button>
    </a>
  );
}
