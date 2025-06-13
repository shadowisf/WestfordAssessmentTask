import { motion, easeOut } from "framer-motion";
import { useState } from "react";

export default function AnimatedChat() {
  const [isHovered, setIsHovered] = useState(false);

  const topLineShift = -5;
  const bottomLineShift = 5;

  const transition = {
    duration: 0.3,
    ease: easeOut,
  };

  return (
    <motion.svg
      width="100%"
      viewBox="0 0 87 86"
      preserveAspectRatio="xMidYMid meet"
      style={{
        height: 83,
        overflow: "visible",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.path
        d="M17.0336 64.8376L16.2695 62.5562L17.3304 62.2104L18.2891 62.782L17.0336 64.8376ZM7.30025 55.232L9.34911 53.9352L9.97691 54.9054L9.60705 55.9908L7.30025 55.232ZM2.43361 69.5923L3.19767 71.8784C2.76859 72.0186 2.30845 72.038 1.86882 71.9345C1.42919 71.831 1.02745 71.6087 0.708626 71.2926C0.389801 70.9765 0.166504 70.579 0.063736 70.1446C-0.0390244 69.7103 -0.0171814 69.2563 0.126816 68.8335L2.43361 69.5923ZM18.2891 62.782C22.9417 65.5436 30.3828 67.1957 36.5001 67.1957V71.9985C29.7598 71.9985 21.3843 70.2215 15.778 66.8932L18.2891 62.782ZM36.5001 67.1909C53.9714 67.1909 68.1334 53.2244 68.1334 35.9921H73C72.9987 40.7211 72.0536 45.4036 70.2186 49.7722C68.3836 54.1408 65.6947 58.11 62.3054 61.4531C58.9161 64.7961 54.8927 67.4476 50.465 69.2562C46.0374 71.0648 41.2921 71.995 36.5001 71.9937V67.1909ZM68.1334 35.9921C68.1295 27.7159 64.7947 19.7849 58.8624 13.935C52.9302 8.08516 44.8864 4.80024 36.5001 4.80278V1.28371e-06C46.1771 -0.00254681 55.4588 3.78838 62.3037 10.539C69.1486 17.2895 72.9961 26.4421 73 35.9921H68.1334ZM36.5001 4.80278C19.0289 4.80278 4.86693 18.7693 4.86693 35.9969H0.000282288C0.00415802 26.4469 3.85168 17.2895 10.6966 10.539C17.5415 3.78838 26.8232 -0.00254681 36.5001 1.28371e-06V4.80278ZM4.86693 35.9969C4.86693 42.3894 6.30746 49.2429 9.34911 53.9352L5.2514 56.5288C1.52841 50.7894 0.000282288 42.9225 0.000282288 35.9969H4.86693ZM17.7976 67.1189L3.19767 71.8784L1.66955 67.3158L16.2695 62.5611L17.7976 67.1189ZM0.126816 68.8335L4.99346 54.4732L9.60705 55.9908L4.7404 70.356L0.126816 68.8335Z"
        fill="black"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 12 : 0,
        }}
        style={{ originX: 0.5, originY: 0.5 }}
        transition={transition}
      />
      <motion.path
        animate={{
          d: isHovered
            ? `M${24 + topLineShift} 30H${49 + topLineShift}`
            : "M24 30H49",
        }}
        initial={false}
        stroke="#ECA22D"
        strokeWidth="4"
        strokeLinecap="round"
        transition={transition}
      />
      <motion.path
        animate={{
          d: isHovered
            ? `M${24 + bottomLineShift} 42H${40 + bottomLineShift}`
            : "M24 42H40",
        }}
        initial={false}
        stroke="#ECA22D"
        strokeWidth="4"
        strokeLinecap="round"
        transition={transition}
      />
    </motion.svg>
  );
}
