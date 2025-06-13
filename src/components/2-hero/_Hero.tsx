import ImageHero from "@assets/images/hero.png";
import { ArrowLeft } from "../svg/Arrows";
import ImagePearson from "@assets/images/pearson-logo.png";
import IconClock from "@assets/icons/clock.svg";
import IconGraphUp from "@assets/icons/graph-up.svg";
import IconStar from "@assets/icons/star.svg";
import IconBlocks from "@assets/icons/blocks.svg";

export default function Hero() {
  return (
    <>
      {/* big screen view */}
      <div className="hidden relative xl:flex justify-between">
        {/* left container wrapper */}
        <div className="w-full mt-[83px] xl:mt-[111px] text-[16px]">
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
            <section className="ms-[43px] space-y-[4px] w-[600px] 2xl:w-[800px]">
              <h1 className="font-light text-[40px] leading-tight break-words">
                Higher National Diploma International
              </h1>
              <h2 className="font-light text-[30px] leading-tight break-words">
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
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-tl-[40px]" />
          <img
            src={ImageHero}
            className="w-full h-full object-contain relative"
            alt="Hero"
          />
        </div>
      </div>

      {/* mobile screen view */}
      <div className="x:hidden">
        <div className="flex justify-between">
          <a href="#" className="flex items-center gap-2">
            <ArrowLeft />
            <span>Back to all Programs</span>
          </a>
          <img src={ImageHero} className="w-[250px] h-auto" alt="Hero" />
        </div>
        <img
          className="w-[200px] h-auto p-4 bg-[#F6F6F6] rounded-e-[40px]"
          src={ImagePearson}
          alt="Pearson Logo"
        />
      </div>

      <div className="xl:hidden relative flex items-start justify-between">
        {/* left container */}
        <div className="w-full mt-8 text-[16px] px-6 space-y-10">
          {/* back link */}

          {/* pearson logo */}

          {/* hero text */}
          <section className="space-y-1">
            <h1 className="font-light text-2xl leading-snug">
              Higher National Diploma International
            </h1>
            <h2 className="font-light text-xl leading-snug">
              In Computing (Software Engineering)
            </h2>
          </section>

          {/* stats grid */}
          <section className="bg-[#0C2D46] text-white py-5 px-6 rounded-xl flex flex-col gap-6">
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

        {/* hero image */}
        <div className="w-full h-auto relative"></div>
      </div>
    </>
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
