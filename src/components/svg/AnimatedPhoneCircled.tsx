import { easeOut, motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedPhoneCircled() {
  const [isHovered, setIsHovered] = useState(false);

  const transition = {
    duration: 0.3,
    ease: easeOut,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.svg
        width={68}
        height={68}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          overflow: "visible",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.circle
          cx="34"
          cy="34"
          r="33"
          stroke="#ECA22D"
          strokeWidth="2"
          fill="none"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          transition={transition}
        />
        <motion.path
          d="M26.9609 15.2023C28.0362 14.8888 29.19 14.9409 30.2303 15.3498C31.2707 15.7587 32.1348 16.4998 32.6788 17.4496L32.8606 17.8036L34.4873 21.2981C34.9809 22.3588 35.1412 23.5363 34.9481 24.6844C34.755 25.8324 34.2171 26.9002 33.4012 27.755L33.0744 28.0686L30.5116 30.38C30.0496 30.8029 30.3961 32.4397 32.067 35.2382C33.5707 37.7563 34.7944 38.9323 35.3964 38.9964H35.5021L35.6323 38.9726L40.6695 37.4831C41.3465 37.2824 42.069 37.2745 42.7505 37.4602C43.432 37.646 44.0438 38.0177 44.5126 38.5308L44.7362 38.804L48.0706 43.2701C48.724 44.1455 49.0497 45.21 48.9939 46.2882C48.938 47.3664 48.5041 48.3941 47.7634 49.202L47.4636 49.5014L46.1318 50.7224C44.9359 51.8174 43.4399 52.5573 41.8217 52.8542C40.2035 53.1511 38.5311 52.9925 37.0034 52.3972C32.2488 50.5442 27.9291 46.3109 24.005 39.74C20.0735 33.1524 18.4394 27.4105 19.1692 22.493C19.3901 21.0065 20.0232 19.6056 21.0014 18.439C21.9796 17.2725 23.2663 16.3838 24.7249 15.8674L25.1991 15.7154L26.9609 15.2023Z"
          fill="#ECA22D"
          animate={{
            rotate: isHovered ? -12 : 0,
          }}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          transition={transition}
        />
      </motion.svg>
    </div>
  );
}
