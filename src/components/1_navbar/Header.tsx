import IconEmail from "@assets/icons/email.svg";
import IconPhone from "@assets/icons/phone.svg";
import { ArrowRight } from "../svg/Arrows";

export default function Header() {
  return (
    /* header container */
    <header className="h-[45px] text-[16px] text-[#FFFFFF] bg-[#0C2D46] flex items-center justify-between relative z-50 sticky top-0 ">
      {/* left container */}
      <section className="flex items-center gap-[50px] ms-[42px]">
        <HeaderLeftItem img={IconEmail} href="mailto:hello@demont.ac.ae">
          hello@demont.ac.ae
        </HeaderLeftItem>

        <HeaderLeftItem img={IconPhone} href="tel:800336668">
          800 33 666 8
        </HeaderLeftItem>
      </section>

      {/* right container */}
      <section className="relative flex items-center gap-[50px]">
        <a href="#">Why Study in the UAE?</a>
        <a href="#">Our Blogs</a>
        <a href="#">Careers</a>
        <a
          href="#"
          className="block h-[45px] flex items-center gap-[5px] px-[25px] bg-[#ECA22D]"
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
