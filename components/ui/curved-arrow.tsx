import { cn } from "@/lib/utils";

interface CurvedArrowProps {
  className?: string;
  direction?: "up" | "down";
}

export function CurvedArrow({ className, direction = "up" }: CurvedArrowProps) {
  return (
    <svg
      className={cn("w-24 h-12", className)}
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          direction === "up"
            ? "M0 40 C30 40 70 10 100 10 L95 5 M95 15 L100 10"
            : "M0 10 C30 10 70 40 100 40 L95 35 M95 45 L100 40"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}