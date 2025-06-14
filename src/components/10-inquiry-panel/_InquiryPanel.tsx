import AnimatedChat from "../svg/AnimatedChat";
import AnimatedPhoneCircled from "../svg/AnimatedPhoneCircled";
import AnimatedSearch from "../svg/AnimatedSearch";
import IconDeMontLogo from "@assets/icons/demont-logo.svg";
import InquiryItem from "./InquiryItem";

export default function InquiryPanel() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-[93px] px-[32px] xl:px-[225px] bg-[#F5FAFC] place-items-center gap-[100px]">
      <InquiryItem
        img={
          <>
            <img src={IconDeMontLogo} />
            <AnimatedPhoneCircled />
          </>
        }
        header="Got question? Let's talk!"
        linkLabel="Contact Us"
      >
        +971 4 580 4285
      </InquiryItem>
      <InquiryItem
        img={<AnimatedSearch />}
        header="Want to know more?"
        linkLabel="Learn More"
      >
        Let's find out!
      </InquiryItem>
      <InquiryItem
        img={<AnimatedChat />}
        header="We are here to guide you"
        linkLabel="Chat with an Admission Counselor"
      >
        +971 58 625 0566
      </InquiryItem>
    </div>
  );
}
