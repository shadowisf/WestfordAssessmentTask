import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ArrowBottomMinimal, ArrowRightMinimal } from "../svg/ArrowsMinimal";

type AdmissionTeamModalProps = {
  admissionTeamFormModalOpen: boolean;
  setAdmissionTeamFormModalOpen: (value: boolean) => void;
};

export default function AdmissionTeamFormModal({
  admissionTeamFormModalOpen,
  setAdmissionTeamFormModalOpen,
}: AdmissionTeamModalProps) {
  const [phone, setPhone] = useState<string | undefined>(undefined);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${
        admissionTeamFormModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white text-black rounded-xl w-[90%] max-w-[400px] p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={() => setAdmissionTeamFormModalOpen(false)}
          className="absolute top-3 right-3 text-gray-700 hover:text-black z-50"
        >
          X
        </button>

        <div className="space-y-6">
          <section className="text-right">
            <h1 className="text-[28px] leading-tight">
              <span className="text-[#ECA22D]">Talk</span> to Our
            </h1>
            <h2 className="font-extralight text-[20px]">Admission Team</h2>
          </section>

          <div className="relative overflow-hidden">
            {/* Form */}
            <form className="relative font-medium text-[16px] space-y-6">
              <FormItem placeholder="Enter your First & Last Names">
                Name
              </FormItem>
              <FormItem placeholder="Enter your Email">Email</FormItem>

              <div className="flex flex-col gap-[6px]">
                <label>Interested Course</label>
                <div className="relative">
                  <select className="font-light border-b border-[#D0D4D6] text-[#6D6D6D] pb-1 w-full appearance-none pr-8 focus:outline-none">
                    <option value="">Select a Course</option>
                    <option value="">Placeholder</option>
                    <option value="">Placeholder</option>
                  </select>
                  <ArrowBottomMinimal className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6D6D6D]" />
                </div>
              </div>

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

              <button
                type="submit"
                className="group w-full h-[38px] px-[24px] cursor-pointer rounded-md transition-colors duration-300 ease-out hover:bg-[#879DA5] bg-[#ECA22D] flex items-center justify-between text-[16px] text-white font-semibold"
              >
                Schedule a Call
                <ArrowRightMinimal className="text-black group-hover:text-white group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

type FormItemProps = {
  children: string;
  placeholder: string;
};

function FormItem({ children, placeholder }: FormItemProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label>{children}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="font-light border-b border-[#D0D4D6] placeholder-[#6D6D6D] text-[16px] pb-1 focus:outline-none"
      />
    </div>
  );
}
