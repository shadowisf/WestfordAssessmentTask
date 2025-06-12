type BulletPointProps = {
  className?: string;
};

export default function BulletPoint({ className }: BulletPointProps) {
  return (
    <svg
      width="14"
      height="6"
      viewBox="0 0 14 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 3H11"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
