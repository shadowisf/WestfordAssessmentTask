import ImagePearsonLogo from "@assets/images/pearson-logo.png";
import ImageNCFELogo from "@assets/images/ncfe-logo.png";
import ImageCMILogo from "@assets/images/cmi-logo.png";
import { ArrowRightMinimal } from "../svg/ArrowsMinimal";

export default function AcademicPartners() {
  return (
    <div className="py-[83px] px-[124px] bg-[#E7EBED]">
      <div className="grid grid-cols-3">
        {/* pearson academic partner card */}
        <div className="w-[343px] h-[450px] rounded-[25px] bg-[#0C2D46]">
          <div className="rounded-t-[25px] p-[8px] bg-[#0C2D46]">
            <img
              className="bg-white py-[64px] px-[55px] rounded-t-[18px]"
              src={ImagePearsonLogo}
            />
          </div>

          <p className="py-[30px] px-[28px] font-light text-[16px] text-white">
            A leading global organization focused on enhancing management and
            leadership capabilities through accreditation, qualifications, and
            resources.
          </p>

          <div className="flex items-center justify-between text-[16px] font-semibold ">
            <button className="py-[7px] px-[28px] rounded-e-[15px] bg-white hover:bg-[#879DA5] hover:text-white transition-colors duration-300 ease-out cursor-pointer">
              Get in touch!
            </button>
            <div className="group">
              <button className="py-[8px] ps-[35px] pe-[20px] rounded-s-[15px] bg-[#ECA22D] flex items-center gap-[7px] text-white hover:bg-[#879DA5] transition-colors duration-300 ease-out cursor-pointer">
                Know More
                <ArrowRightMinimal className="text-black group-hover:text-white group-hover:translate-x-2 transition-colors transition-transform duration-300 ease-out" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-[49px]">
          <div
            className="group relative w-[343px] h-[200px] bg-white px-[74px] pt-[67px] pb-[89px] rounded-[25px]"
            style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.08)" }}
          >
            <img src={ImageNCFELogo} />

            {/* ncfe academic partner card */}
            <div className="absolute inset-0 w-[343px] h-[450px] rounded-[25px] bg-[#0C2D46] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="rounded-t-[25px] group-hover:p-[8px]  transition-padding duration-300 ease-out bg-[#0C2D46]">
                <img
                  src={ImageNCFELogo}
                  className="rounded-t-[18px] bg-white pt-[50px] pb-[50px] object-contain px-[74px] h-[192px]"
                />
              </div>

              <p className="py-[30px] px-[28px] font-light text-[16px] text-white">
                A leading global organization focused on enhancing management
                and leadership capabilities through accreditation,
                qualifications, and resources.
              </p>

              <div className="flex items-center justify-between text-[16px] font-semibold ">
                <button className="py-[7px] px-[28px] rounded-e-[15px] bg-white hover:bg-[#879DA5] hover:text-white transition-colors duration-300 ease-out cursor-pointer">
                  Get in touch!
                </button>
                <div className="group">
                  <button className="py-[8px] ps-[35px] pe-[20px] rounded-s-[15px] bg-[#ECA22D] flex items-center gap-[7px] text-white hover:bg-[#879DA5] transition-colors duration-300 ease-out cursor-pointer">
                    Know More
                    <ArrowRightMinimal className="text-black group-hover:text-white group-hover:translate-x-2 transition-colors transition-transform duration-300 ease-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[343px] h-[200px] bg-white px-[74px] pt-[67px] pb-[89px] rounded-[25px]"
            style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.08)" }}
          >
            <img src={ImageCMILogo} />
          </div>
        </div>

        <div className="space-y-[20px]">
          <h1 className="text-[40px]">
            Discover Our Academic{" "}
            <span className="text-[#ECA22D]">Partners</span>
          </h1>

          <p className="font-extralight text-[16px]">
            <span className="font-semibold">DeMont</span> Institute of
            Management and Technology proudly collaborates with top institutions
            globally, ensuring our students receive world-class higher
            education.
          </p>
        </div>
      </div>
    </div>
  );
}
