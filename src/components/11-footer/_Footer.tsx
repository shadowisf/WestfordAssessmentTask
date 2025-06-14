import { CheckboxChecked, CheckboxUnchecked } from "../svg/Checkbox";
import PhoneTollfree from "../svg/PhoneTollfree";
import { Facebook, X, Instagram, LinkedIn } from "../svg/SocialMedia";
import Submit from "../svg/Submit";
import IconDeMontLogoAlt from "@assets/icons/demont-logo-full-alt.png";
import IconLocation from "@assets/icons/location.svg";
import CopyrightLabel from "./CopyrightLabel";
import { useState } from "react";
import FooterListItem from "./FooterListItem";

export default function Footer() {
  const [footerCheckboxChecked, setFooterCheckboxChecked] = useState(false);

  return (
    <>
      <div className="pt-[83px] pb-[107px] px-[42px] bg-[#0C2D46] text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:place-items-center xl:items-start gap-[100px] xl:gap-[50px]">
          {/* very left container */}
          <div className="space-y-[55px] w-[282px]">
            <img src={IconDeMontLogoAlt} className="w-[282px]" />

            <div className="space-y-[26px]">
              {/* location */}
              <div className="flex items-center gap-[14px]">
                <img src={IconLocation} />
                <a href="#" className="text-[16px] font-light">
                  802, 8th Floor, Block No. 10, Academic City – Dubai
                </a>
              </div>

              {/* phone */}
              <div className="flex items-center gap-[14px]">
                <PhoneTollfree className="hover:text-[#ECA22D] transition-colors duration-300 ease-out" />
                <a href="tel:800336668" className="text-[16px] font-light">
                  800 33 666 8
                </a>
              </div>

              {/* social media */}
              <div className="flex gap-[18px] items-center">
                <a href="#">
                  <Facebook className="hover:text-[#ECA22D] transition-colors duration-300 ease-out" />
                </a>
                <a href="#">
                  <X className="hover:text-[#ECA22D] transition-colors duration-300 ease-out" />
                </a>
                <a href="#">
                  <Instagram className="hover:text-[#ECA22D] transition-colors duration-300 ease-out" />
                </a>
                <a href="#">
                  <LinkedIn className="hover:text-[#ECA22D] transition-colors duration-300 ease-out" />
                </a>
              </div>
            </div>
          </div>

          {/* mid left container */}
          <div className="space-y-[18px]">
            <h1 className="text-[26px] ms-[16px]">Menu</h1>
            <FooterListItem>About Us</FooterListItem>
            <FooterListItem>Programs</FooterListItem>
            <FooterListItem>Our Partners</FooterListItem>
            <FooterListItem>Our Blogs</FooterListItem>
            <FooterListItem>Contact Us</FooterListItem>
          </div>

          {/* mid right container */}
          <div className="space-y-[18px]">
            <h1 className="text-[26px] ms-[16px]">Information</h1>
            <FooterListItem>Skill Master</FooterListItem>
            <FooterListItem>DeLead</FooterListItem>
            <FooterListItem>DeCode</FooterListItem>
            <FooterListItem>Privacy Policy</FooterListItem>
            <FooterListItem>Refund Policy</FooterListItem>
          </div>

          {/* very right container */}
          <div className="space-y-[14px]">
            <h1 className="text-[26px]">Get in Touch</h1>
            <form className="space-y-[14px] flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="py-[8px] px-[23px] bg-[#E7EBED] rounded-[25px] w-[200px] xl:w-[272px] text-black font-light text-[16px]"
                required
              />
              <input
                type="text"
                placeholder="Email"
                className="py-[8px] px-[23px] bg-[#E7EBED] rounded-[25px] w-[200px] xl:w-[272px] text-black font-light text-[16px]"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                className="py-[8px] px-[23px] bg-[#E7EBED] rounded-[25px] w-[200px] xl:w-[272px] text-black font-light text-[16px]"
                required
              />

              <div className="flex items-center gap-[8px]">
                <textarea
                  placeholder="Message"
                  className="min-h-[77px] flex-shrink-0 resize-none py-[8px] px-[23px] bg-[#E7EBED] rounded-[25px] w-[200px] xl:w-[272px] text-black font-light text-[16px]"
                  required
                />
                <button
                  type="submit"
                  className="cursor-pointer hover:text-[#ECA22D] transition-colors duration-300 ease-out"
                >
                  <Submit />
                </button>
              </div>

              <label className="flex gap-[10px] cursor-pointer w-[200px] xl:w-[272px]">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={footerCheckboxChecked}
                  onChange={() =>
                    setFooterCheckboxChecked(!footerCheckboxChecked)
                  }
                />
                <span className="w-[18px] h-[18px]">
                  {footerCheckboxChecked ? (
                    <CheckboxChecked />
                  ) : (
                    <CheckboxUnchecked />
                  )}
                </span>
                <span className="font-light text-[12px]">
                  I agree to share my contact info and receive exclusive offers
                  via email or call
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>

      <CopyrightLabel />
    </>
  );
}
