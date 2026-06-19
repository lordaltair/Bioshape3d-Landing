import { ArrowUpLeft, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArrowButton({
  to,
  children,
  variant = "dark",
  icon = "arrow",
  className = "",
}) {
  const colors =
    variant === "black"
      ? "border-black bg-black text-white group-hover:border-[#1f6170] group-hover:bg-[#1f6170]"
      : "border-[#1f6170] bg-[#1f6170] text-white group-hover:border-[#174b57] group-hover:bg-[#174b57]";
  const square =
    variant === "black"
      ? "border-black bg-black text-white group-hover:border-[#1f6170] group-hover:bg-[#1f6170]"
      : "border-[#1f6170] bg-[#1f6170] text-white group-hover:border-[#174b57] group-hover:bg-[#174b57]";
  const Icon = icon === "config" ? SlidersHorizontal : ArrowUpLeft;
  const iconMotion =
    icon === "config"
      ? ""
      : "group-hover:-rotate-45 group-hover:scale-125 group-hover:delay-300";

  return (
    <Link
      to={to}
      className={`group inline-flex max-w-full items-stretch gap-2 rounded-md text-sm font-medium ${className}`}
    >
      <span
        className={`grid min-h-11 place-items-center rounded-md border px-4 transition sm:min-h-12 sm:px-6 ${colors}`}
      >
        {children}
      </span>
      <span
        className={`grid min-h-11 w-11 shrink-0 place-items-center rounded-md border transition duration-300 group-hover:-translate-x-1 sm:min-h-12 sm:w-12 ${square}`}
      >
        <Icon
          size={17}
          className={`transition-transform delay-0 duration-300 ${iconMotion}`}
        />
      </span>
    </Link>
  );
}
