import IconClose from "@assets/icons/close.svg";
import IconDeMontLogoFull from "@assets/icons/demont-logo-full.svg";
import IconPhoneAlt from "@assets/icons/phone-alt.svg";
import IconEmailAlt from "@assets/icons/email-alt.svg";
import IconFacebookAlt from "@assets/icons/facebook-alt.svg";
import IconXAlt from "@assets/icons/x-alt.svg";
import IconInstagramAlt from "@assets/icons/instagram-alt.svg";
import IconLinkedInAlt from "@assets/icons/linkedin-alt.svg";

type AdmissionConfirmedProps = {
  admissionConfirmed: boolean;
  setAdmissionConfirmed: (value: boolean) => void;
};

export default function AdmissionConfirmed({
  admissionConfirmed,
  setAdmissionConfirmed,
}: AdmissionConfirmedProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/25 transition-opacity duration-300 ease-out ${
        admissionConfirmed
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white text-black rounded-xl w-full max-w-[700px] h-fit max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <div className="relative p-4">
          <button
            onClick={() => setAdmissionConfirmed(false)}
            className="absolute top-0 right-0 m-4 hover:text-black z-50 text-[20px] cursor-pointer"
          >
            <img src={IconClose} alt="Close" />
          </button>
        </div>

        <div className="flex flex-col gap-6 sm:gap-[92px] my-6 sm:my-[127px] px-4 sm:px-[41px]">
          {/* Logo and Thank You */}
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-[47px]">
            <img
              src={IconDeMontLogoFull}
              alt="DeMont Logo"
              className="w-36 sm:w-52"
            />

            <div>
              <p className="text-[#ECA22D] text-[32px] sm:text-[55px] font-light">
                Thank you
              </p>
              <p className="text-[20px] sm:text-[32px] font-extralight">
                for your interest!
              </p>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="text-center space-y-2 sm:space-y-4">
            <p className="text-[16px] sm:text-[18px]">
              Your inquiry has been successfully submitted. Our Academic Advisor
              shall get in touch with you within the next 48 hours.
            </p>
            <p className="text-[16px] sm:text-[18px]">
              Please don't hesitate to contact us directly at:
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <button className="flex items-center gap-2 font-medium text-[16px] sm:text-[18px] bg-[#ECA22D] py-2 sm:py-[11px] px-6 sm:px-[45px] text-white rounded-md">
              <img src={IconPhoneAlt} alt="Phone" />
              <span>+971 45804285</span>
            </button>

            <button className="flex items-center gap-2 font-medium text-[16px] sm:text-[18px] bg-[#0C2D46] py-2 sm:py-[11px] px-6 sm:px-[45px] text-white rounded-md">
              <img src={IconEmailAlt} alt="Email" />
              <span>hello@demont.ac.ae</span>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-[17px] pt-4 sm:pt-8">
            <a href="#">
              <img src={IconFacebookAlt} alt="Facebook" />
            </a>
            <a href="#">
              <img src={IconXAlt} alt="X" />
            </a>
            <a href="#">
              <img src={IconInstagramAlt} alt="Instagram" />
            </a>
            <a href="#">
              <img src={IconLinkedInAlt} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
