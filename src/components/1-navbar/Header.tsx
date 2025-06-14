import IconEmail from "@assets/icons/email.svg";
import IconPhone from "@assets/icons/phone.svg";
import { ArrowRight } from "../svg/Arrows";

export default function Header() {
  return (
    /* header container */
    <header className="text-[16px] text-[#FFFFFF] bg-[#0C2D46] flex items-center justify-between relative z-50 sticky top-0">
      {/* left container */}
      <section className="grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-[50px] m-[10px] sm:ms-[42px]">
        <HeaderLeftItem img={IconEmail} href="mailto:hello@demont.ac.ae">
          hello@demont.ac.ae
        </HeaderLeftItem>

        <HeaderLeftItem img={IconPhone} href="tel:800336668">
          800 33 666 8
        </HeaderLeftItem>
      </section>

      {/* right container */}
      <section className="relative h-full flex items-center gap-[50px]">
        <a href="#" className="hidden xl:block">
          Why Study in the UAE?
        </a>
        <a href="#" className="hidden xl:block">
          Our Blogs
        </a>
        <a href="#" className="hidden xl:block">
          Careers
        </a>
        <a
          href="#"
          className="block h-[70px] sm:h-[45px] flex items-center gap-[5px] px-[25px] bg-[#ECA22D]"
        >
          Apply
          <ArrowRight />
        </a>
      </section>
    </header>
  );
}

type HeaderLeftItemProps = {
  img: string;
  href: string;
  children: string;
};

function HeaderLeftItem({ img, href, children }: HeaderLeftItemProps) {
  return (
    <div className="flex items-center gap-[5px]">
      <img src={img} />
      <a href={href}>{children}</a>
    </div>
  );
}
