import ImageHero from "@assets/images/hero.png";
import ImagePearson from "@assets/images/pearson-logo.png";
import IconClock from "@assets/icons/clock.svg";
import IconGraphUp from "@assets/icons/graph-up.svg";
import IconStar from "@assets/icons/star.svg";
import IconBlocks from "@assets/icons/blocks.svg";
import StatsItem from "./StatsItem";
import { ArrowLeftLongerB } from "../svg/ArrowsLonger";

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
            <a
              href="#"
              className="group inline-flex items-center gap-2 relative mx-12"
            >
              <span className="relative inline-flex items-center">
                <span
                  className="
        inline-block relative z-10
        transition-transform duration-300 ease-out
        translate-x-0 group-hover:-translate-x-2
      "
                >
                  <ArrowLeftLongerB />
                </span>
                <span
                  className="
        absolute w-[21px] h-[21px] rounded-full bg-[#879DA5]
        left-1/2 top-1/2 -translate-x-[27px] -translate-y-1/2 z-0
        origin-center pointer-events-none
        scale-0 opacity-0
        group-hover:scale-100 group-hover:opacity-100
        transition-transform transition-opacity duration-300 ease-out
      "
                />
              </span>
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
            <section className="py-[25px] px-[32px] xl:px-[42px] bg-[#0C2D46] text-white flex gap-[70px]">
              <StatsItem img={IconClock} header="Duration">
                24 months
              </StatsItem>
              <StatsItem img={IconGraphUp} header="Course Level">
                Level 5
              </StatsItem>
              <StatsItem img={IconStar} header="Credits">
                240
              </StatsItem>
              <StatsItem img={IconBlocks} header="Modules">
                15
              </StatsItem>
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

      {/* tablet screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className="flex justify-between gap-4">
          <div className="mt-[40px] space-y-8">
            <a
              href="#"
              className="group inline-flex items-center gap-2 relative mx-12"
            >
              <span className="relative inline-flex items-center">
                <span
                  className="
        inline-block relative z-10
        transition-transform duration-300 ease-out
        translate-x-0 group-hover:-translate-x-2
      "
                >
                  <ArrowLeftLongerB />
                </span>
                <span
                  className="
        absolute w-[21px] h-[21px] rounded-full bg-[#879DA5]
        left-1/2 top-1/2 -translate-x-[27px] -translate-y-1/2 z-0
        origin-center pointer-events-none
        scale-0 opacity-0
        group-hover:scale-100 group-hover:opacity-100
        transition-transform transition-opacity duration-300 ease-out
      "
                />
              </span>
              <span>Back to all Programs</span>
            </a>

            <img
              className="w-[200px] h-auto p-4 bg-[#F6F6F6] rounded-e-[40px]"
              src={ImagePearson}
            />

            <section className="space-y-1 ms-4">
              <h1 className="font-light text-2xl leading-snug">
                Higher National Diploma International
              </h1>
              <h2 className="font-light text-xl leading-snug">
                In Computing (Software Engineering)
              </h2>
            </section>

            <section className="bg-[#0C2D46] text-white py-5 px-6 rounded-xl flex flex-wrap justify-center gap-6 ms-4">
              <StatsItem img={IconClock} header="Duration">
                24 months
              </StatsItem>
              <StatsItem img={IconGraphUp} header="Course Level">
                Level 5
              </StatsItem>
              <StatsItem img={IconStar} header="Credits">
                240
              </StatsItem>
              <StatsItem img={IconBlocks} header="Modules">
                15
              </StatsItem>
            </section>
          </div>

          <img
            src={ImageHero}
            className="w-full max-w-[500px] h-full object-contain"
          />
        </div>
      </div>

      {/* mobile screen view */}
      <div className="relative lg:hidden w-full h-screen text-white">
        <div className="absolute inset-0">
          <img
            src={ImageHero}
            className="w-full h-full object-cover brightness-25"
          />
        </div>

        <div className="relative pt-[50px] space-y-8">
          <a
            href="#"
            className="group inline-flex items-center gap-2 relative mx-12"
          >
            <span className="relative inline-flex items-center">
              <span
                className="
        inline-block relative z-10
        transition-transform duration-300 ease-out
        translate-x-0 group-hover:-translate-x-2
      "
              >
                <ArrowLeftLongerB />
              </span>
              <span
                className="
        absolute w-[21px] h-[21px] rounded-full bg-[#879DA5]
        left-1/2 top-1/2 -translate-x-[27px] -translate-y-1/2 z-0
        origin-center pointer-events-none
        scale-0 opacity-0
        group-hover:scale-100 group-hover:opacity-100
        transition-transform transition-opacity duration-300 ease-out
      "
              />
            </span>
            <span>Back to all Programs</span>
          </a>

          <div className="grid grid-cols-1 place-items-center gap-12 mt-12">
            <img
              className="w-[180px] p-4 bg-[#F6F6F6] rounded-[40px]"
              src={ImagePearson}
              alt="Pearson Logo"
            />

            {/* hero text */}
            <section className="space-y-1 px-6 text-center">
              <h1 className="font-light text-2xl leading-snug">
                Higher National Diploma International
              </h1>
              <h2 className="font-light text-xl leading-snug">
                In Computing (Software Engineering)
              </h2>
            </section>

            {/* stats */}
            <section className="w-full max-w-[300px] bg-[#0C2D46] bg-opacity-90 py-5 mx-6 px-6 rounded-xl flex flex-col gap-4">
              <StatsItem img={IconClock} header="Duration">
                24 months
              </StatsItem>
              <StatsItem img={IconGraphUp} header="Course Level">
                Level 5
              </StatsItem>
              <StatsItem img={IconStar} header="Credits">
                240
              </StatsItem>
              <StatsItem img={IconBlocks} header="Modules">
                15
              </StatsItem>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
