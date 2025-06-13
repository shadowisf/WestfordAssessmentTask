// AnimatedBulletpoint.tsx
type AnimatedBulletPointProps = {
  className?: string;
};

export default function AnimatedBulletpoint({
  className,
}: AnimatedBulletPointProps) {
  return (
    <svg
      width="11"
      height="2"
      viewBox="0 0 11 2"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="1"
        y1="1"
        x2="10"
        y2="1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
