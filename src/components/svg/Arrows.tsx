type ArrowProps = {
  className?: string;
};

export function ArrowUp({ className }: ArrowProps) {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.00024 1V12M5.00024 1L9.00024 5M5.00024 1L1.00024 5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ArrowDown({ className }: ArrowProps) {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12L5 1M5 12L1 8M5 12L9 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: ArrowProps) {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5L1 5M12 5L8 9M12 5L8 1"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
