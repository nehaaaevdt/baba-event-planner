import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[#DD901E] text-white hover:bg-[#B87512] hover:shadow-lg hover:shadow-[#DD901E]/25 active:scale-95",

    secondary:
      "bg-slate-100 text-slate-800 hover:bg-[#FFF9EF] active:scale-95",

    outline:
      "border border-[#DD901E] text-[#DD901E] hover:bg-[#FFF9EF] hover:border-[#B87512] hover:text-[#B87512] active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If href exists, render a Next.js Link
  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Otherwise render a normal button
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

