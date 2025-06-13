import { useState } from "react";

type SocialMediaProps = {
  className?: string;
};

export function Facebook({ className }: SocialMediaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z"
        fill="currentColor"
      />
      <path
        d="M21.0744 14.8551V18.8853H26.0597L25.2703 24.3141H21.0744V36.822C20.2331 36.9387 19.3724 36.9996 18.4987 36.9996C17.4903 36.9996 16.4999 36.9192 15.5355 36.7637L15.5355 24.3141H10.9377V18.8853H15.5355V13.9542C15.5355 10.8949 18.0152 8.41382 21.0757 8.41382V8.41641C21.0847 8.41641 21.0925 8.41382 21.1016 8.41382H26.061V13.109H22.8204C21.8573 13.109 21.0757 13.8906 21.0757 14.8538L21.0744 14.8551Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
    </svg>
  );
}

export function X({ className }: SocialMediaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z"
        fill="currentColor"
      />
      <path
        d="M7.50261 8.15967L16.0345 19.567L7.44946 28.842H9.38217L16.8991 20.722L22.972 28.842H29.5478L20.5363 16.793L28.5277 8.15967H26.595L19.673 15.638L14.0798 8.15967H7.5039H7.50261ZM10.344 9.58299H13.3642L26.7039 27.4186H23.6836L10.344 9.58299Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
    </svg>
  );
}
export function Instagram({ className }: SocialMediaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M18.5421 0L18.4579 0C8.26387 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26387 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z"
        fill="currentColor"
      />
      <path
        d="M24.225 7.52734H12.7761C9.61317 7.52734 7.04004 10.1005 7.04004 13.2634L7.04004 23.7374C7.04004 26.9004 9.61317 29.4735 12.7761 29.4735H24.225C27.3879 29.4735 29.961 26.9004 29.961 23.7374V13.2634C29.961 10.1005 27.3879 7.52734 24.225 7.52734ZM9.06355 13.2634C9.06355 11.2166 10.7293 9.55085 12.7761 9.55085H24.225C26.2718 9.55085 27.9375 11.2166 27.9375 13.2634V23.7374C27.9375 25.7843 26.2718 27.45 24.225 27.45H12.7761C10.7293 27.45 9.06355 25.7843 9.06355 23.7374V13.2634Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
      <path
        d="M18.5008 23.8351C21.4421 23.8351 23.8363 21.4422 23.8363 18.4996C23.8363 15.557 21.4434 13.1641 18.5008 13.1641C15.5582 13.1641 13.1653 15.557 13.1653 18.4996C13.1653 21.4422 15.5582 23.8351 18.5008 23.8351ZM18.5008 15.1889C20.3273 15.1889 21.8128 16.6744 21.8128 18.5009C21.8128 20.3274 20.3273 21.8129 18.5008 21.8129C16.6743 21.8129 15.1888 20.3274 15.1888 18.5009C15.1888 16.6744 16.6743 15.1889 18.5008 15.1889Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
      <path
        d="M24.3299 14.0256C25.1219 14.0256 25.7675 13.3813 25.7675 12.588C25.7675 11.7947 25.1232 11.1504 24.3299 11.1504C23.5366 11.1504 22.8923 11.7947 22.8923 12.588C22.8923 13.3813 23.5366 14.0256 24.3299 14.0256Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
    </svg>
  );
}
export function LinkedIn({ className }: SocialMediaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M18.5421 0L18.4579 0C8.26388 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26388 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z"
        fill="currentColor"
      />
      <path
        d="M8.82379 12.2982C8.33639 11.8458 8.09399 11.2858 8.09399 10.6195C8.09399 9.95318 8.33768 9.36855 8.82379 8.91485C9.31119 8.46245 9.9386 8.2356 10.7073 8.2356C11.476 8.2356 12.0788 8.46245 12.5649 8.91485C13.0523 9.36725 13.2947 9.93633 13.2947 10.6195C13.2947 11.3026 13.051 11.8458 12.5649 12.2982C12.0775 12.7506 11.4591 12.9774 10.7073 12.9774C9.95545 12.9774 9.31119 12.7506 8.82379 12.2982ZM12.8851 14.8933V28.7636H8.50231L8.50231 14.8933H12.8851Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
      <path
        d="M27.4749 16.264C28.4303 17.3011 28.9073 18.7244 28.9073 20.5366V28.5192H24.745V21.0992C24.745 20.1853 24.5078 19.475 24.0346 18.9694C23.5615 18.4638 22.9237 18.2098 22.1252 18.2098C21.3267 18.2098 20.6889 18.4625 20.2157 18.9694C19.7426 19.475 19.5053 20.1853 19.5053 21.0992V28.5192H15.3184L15.3184 14.855H19.5053V16.6672C19.9292 16.0631 20.5009 15.5861 21.2191 15.2348C21.9372 14.8835 22.7448 14.7085 23.6431 14.7085C25.2427 14.7085 26.5209 15.227 27.4749 16.2627V16.264Z"
        className={`transition-colors duration-300 ease-out ${
          isHovered ? "fill-white" : "fill-[#181818]"
        }`}
      />
    </svg>
  );
}
