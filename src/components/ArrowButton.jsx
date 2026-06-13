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
      ? "border-black bg-black text-white group-hover:border-[#1A8EF9] group-hover:bg-[#1A8EF9]"
      : "border-[#1A8EF9] bg-[#1A8EF9] text-white group-hover:border-[#046ECF] group-hover:bg-[#046ECF]";
  const square =
    variant === "black"
      ? "border-black bg-black text-white group-hover:border-[#1A8EF9] group-hover:bg-[#1A8EF9]"
      : "border-[#1A8EF9] bg-[#1A8EF9] text-white group-hover:border-[#046ECF] group-hover:bg-[#046ECF]";
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
        className={`grid min-h-11 place-items-center border px-4 transition sm:min-h-12 sm:px-6 ${colors}`}
      >
        {children}
      </span>
      <span
        className={`grid min-h-11 w-11 shrink-0 place-items-center border transition duration-300 group-hover:-translate-x-1 sm:min-h-12 sm:w-12 ${square}`}
      >
        <Icon
          size={17}
          className={`transition-transform delay-0 duration-300 ${iconMotion}`}
        />
      </span>
    </Link>
  );
}
