import ImageWeirdContainer from "@assets/images/weird-container.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ArrowBottomMinimal, ArrowRightMinimal } from "../svg/ArrowsMinimal";
import { useState } from "react";
import AdmissionFormItem from "./AdmissionFormItem";

export default function AdmissionForm() {
  const [phone, setPhone] = useState<string | undefined>(undefined);

  return (
    <div className="hidden xl:block space-y-[26px]">
      <section className="text-right me-[45px]">
        <h1 className="text-[40px]">
          <span className="text-[#ECA22D]">Talk</span> to Our
        </h1>
        <h2 className="font-extralight text-[28px]">Admission Team</h2>
      </section>

      <section className="relative w-full h-full overflow-hidden ">
        {/* background */}
        <img
          src={ImageWeirdContainer}
          alt="Background"
          className="absolute inset-0 pointer-events-none"
        />

        {/* form */}
        <form className="relative font-medium p-[40px] text-[18px] space-y-[30px] w-[299px] h-[537px]">
          <AdmissionFormItem placeholder="Enter your First & Last Names">
            Name
          </AdmissionFormItem>

          <AdmissionFormItem placeholder="Enter your Email">
            Email
          </AdmissionFormItem>

          <div className="flex flex-col gap-[14px] w-[227px]">
            <label>Interested Course</label>
            <div className="relative w-full">
              <select
                className="font-light border-b border-[#D0D4D6] text-[#6D6D6D] text-[16px] pb-[5px] focus:outline-none appearance-none w-full pr-10"
                required
              >
                <option value="">Select a Course</option>
                <option value="">placeholder</option>
                <option value="">placeholder</option>
                <option value="">placeholder</option>
              </select>

              <ArrowBottomMinimal className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6D6D6D]" />
            </div>
          </div>

          <div className="flex flex-col gap-[14px] w-[227px]">
            <label>Phone</label>
            <PhoneInput
              defaultCountry="AE"
              name="phone"
              placeholder="+971"
              value={phone}
              onChange={setPhone}
              className="border-b border-[#D0D4D6] pb-[5px] text-[16px] font-light"
              required
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="group w-[254px] h-[38px] ps-[34px] cursor-pointer rounded-s-[15px] transition-colors duration-300 ease-out hover:bg-[#879DA5] bg-[#ECA22D] flex items-center gap-[9px] text-[16px] text-white font-semibold"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Schedule a Call
            <ArrowRightMinimal className="text-black transition-transform duration-300 ease-out group-hover:text-white group-hover:translate-x-4" />
          </button>
        </form>
      </section>
    </div>
  );
}
