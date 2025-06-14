import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ArrowBottomMinimal, ArrowRightMinimal } from "../svg/ArrowsMinimal";
import AdmissionFormItem from "./AdmissionFormItem";
import IconClose from "@assets/icons/close.svg";
import AdmissionConfirmed from "./AdmissionConfirmed";

type AdmissionModalProps = {
  admissionFormModalOpen: boolean;
  setAdmissionFormModalOpen: (value: boolean) => void;
};

export default function AdmissionFormModal({
  admissionFormModalOpen,
  setAdmissionFormModalOpen,
}: AdmissionModalProps) {
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [admissionConfirmed, setAdmissionConfirmed] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/25 transition-opacity duration-300 ease-out ${
          admissionFormModalOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative bg-white text-black rounded-xl w-[90%] max-w-[400px] max-h-screen overflow-y-auto shadow-lg">
          {/* Header */}
          <div className="relative p-6 pb-4">
            <h1 className="text-[28px] leading-tight">
              <span className="text-[#ECA22D]">Talk</span> to Our
            </h1>
            <h2 className="font-extralight text-[20px]">Admission Team</h2>

            <button
              onClick={() => setAdmissionFormModalOpen(false)}
              className="absolute top-0 right-0 hover:text-black z-50 text-[20px] m-6 cursor-pointer"
            >
              <img src={IconClose} alt="Close" />
            </button>
          </div>

          {/* Form */}
          <form
            className="flex flex-col font-medium text-[16px] space-y-6 px-6"
            onSubmit={(e) => {
              e.preventDefault();
              setAdmissionFormModalOpen(false);
              setAdmissionConfirmed(true);
            }}
          >
            <AdmissionFormItem
              className="w-full"
              placeholder="Enter your First & Last Names"
            >
              Name
            </AdmissionFormItem>

            <AdmissionFormItem
              className="w-full"
              placeholder="Enter your Email"
            >
              Email
            </AdmissionFormItem>

            {/* Interested Course */}
            <div className="flex flex-col gap-[6px]">
              <label>Interested Course</label>
              <div className="relative">
                <select
                  className="font-light border-b border-[#D0D4D6] text-[#6D6D6D] pb-1 w-full appearance-none pr-8 focus:outline-none"
                  required
                >
                  <option value="">Select a Course</option>
                  <option value="">Placeholder</option>
                  <option value="">Placeholder</option>
                </select>
                <ArrowBottomMinimal className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6D6D6D]" />
              </div>
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-[6px]">
              <label>Phone</label>
              <PhoneInput
                defaultCountry="AE"
                name="phone"
                placeholder="+971"
                value={phone}
                onChange={setPhone}
                className="border-b border-[#D0D4D6] pb-1 text-[16px] font-light"
                required
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <div className="pb-6">
              <button
                type="submit"
                onClick={(e) => {
                  /* for testing purposes, disable form submission */
                  e.preventDefault();
                  setAdmissionFormModalOpen(false);
                  setAdmissionConfirmed(true);
                }}
                className="group w-full h-[38px] px-[24px] cursor-pointer rounded-s-[15px] transition-colors duration-300 ease-out hover:bg-[#879DA5] bg-[#ECA22D] flex items-center gap-[9px] text-[16px] text-white font-semibold"
              >
                Schedule a Call
                <ArrowRightMinimal className="text-black group-hover:text-white group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <AdmissionConfirmed
        admissionConfirmed={admissionConfirmed}
        setAdmissionConfirmed={setAdmissionConfirmed}
      />
    </>
  );
}
