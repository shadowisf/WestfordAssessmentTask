type MathProps = {
  className?: string;
};

export function Minus({ className }: MathProps) {
  return (
    <svg
      width="19"
      height="3"
      viewBox="0 0 19 3"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="17.5"
        y2="1.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Plus({ className }: MathProps) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 10L17.5 10M9.5 18V2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
