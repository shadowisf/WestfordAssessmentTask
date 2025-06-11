import ImageHero from "@assets/images/hero.png";
import { ArrowLeft } from "./svg/Arrows";
import ImagePearson from "@assets/images/PearsonLogo.png";
import IconClock from "@assets/icons/clock.svg";
import IconGraphUp from "@assets/icons/graph-up.svg";
import IconStar from "@assets/icons/star.svg";
import IconBlocks from "@assets/icons/blocks.svg";

export default function Hero() {
  return (
    <main className="relative flex justify-between">
      {/* left container wrapper */}
      <div className="w-full mt-[83px] text-[16px]">
        {/* left container */}
        <div className="space-y-[39px]">
          {/* back link */}
          <a href="#" className="flex items-center gap-[5px] ms-[43px]">
            <ArrowLeft />
            <span>Back to all Programs</span>
          </a>

          {/* pearson logo */}
          <img
            className="w-[297px] h-[108px] py-[25px] px-[43px] bg-[#F6F6F6] flex items-center justify-center rounded-e-[54px]"
            src={ImagePearson}
            alt="Pearson Logo"
          />

          {/* hero text */}
          <section className="ms-[43px] space-y-[4px]">
            <h1 className="font-light text-[40px]">
              Higher National Diploma International
            </h1>
            <h2 className="font-light text-[30px]">
              In Computing (Software Engineering)
            </h2>
          </section>

          {/* stats grid */}
          <section className="py-[25px] px-[42px] bg-[#0C2D46] text-white flex gap-[70px]">
            <StatItem img={IconClock} header="Duration">
              24 months
            </StatItem>
            <StatItem img={IconGraphUp} header="Course Level">
              Level 5
            </StatItem>
            <StatItem img={IconStar} header="Credits">
              240
            </StatItem>
            <StatItem img={IconBlocks} header="Modules">
              15
            </StatItem>
          </section>
        </div>
      </div>

      {/* hero image container */}
      <div className="absolute right-0 bottom-0 w-[574px] h-[536px]">
        {/* white overlay in bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white z-0 rounded-tl-[40px]" />
        <img
          src={ImageHero}
          className="w-full h-full object-contain relative z-10"
          alt="Hero"
        />
      </div>
    </main>
  );
}

type StatItemProps = {
  img: string;
  header: string;
  children: string;
};

function StatItem({ img, header, children }: StatItemProps) {
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
