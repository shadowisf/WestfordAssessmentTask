import { motion, easeOut } from "framer-motion";
import { useState } from "react";

export default function AnimatedSearch() {
  const [isHovered, setIsHovered] = useState(false);

  const transition = {
    duration: 0.3,
    ease: easeOut,
  };

  return (
    <motion.svg
      width={95}
      height={83}
      viewBox="0 0 95 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blue lines */}
      <motion.g animate={{ x: isHovered ? -8 : 0 }} transition={transition}>
        <path
          d="M2 2H80.2646"
          stroke="#0C2D46"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M2 33.4341H23.5228"
          stroke="#0C2D46"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M2 64.8683H23.5228"
          stroke="#0C2D46"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
      {/* Magnifying glass */}
      <motion.g
        animate={{
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? 8 : 0, // Move down by 8 units when hovered
        }}
        style={{ originX: 0.67, originY: 0.5 }}
        transition={transition}
      >
        <path
          d="M61.2734 57.4659C66.8686 57.4659 72.2347 55.2432 76.1911 51.2868C80.1475 47.3303 82.3703 41.9643 82.3703 36.369C82.3703 30.7738 80.1475 25.4077 76.1911 21.4513C72.2347 17.4949 66.8686 15.2722 61.2734 15.2722C55.6781 15.2722 50.3121 17.4949 46.3556 21.4513C42.3992 25.4077 40.1765 30.7738 40.1765 36.369C40.1765 41.9643 42.3992 47.3303 46.3556 51.2868C50.3121 55.2432 55.6781 57.4659 61.2734 57.4659Z"
          stroke="#ECA22D"
          strokeWidth="4"
        />
        <path
          d="M74.9243 52.502L92.2982 70"
          stroke="#ECA22D"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
    </motion.svg>
  );
}
