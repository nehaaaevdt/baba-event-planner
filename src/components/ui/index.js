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
    // Golden primary button
    primary:
      "bg-[#DD901E] text-white hover:bg-[#C77A18] hover:shadow-lg hover:shadow-[#DD901E]/25 active:scale-95",

    // Keep secondary neutral
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95",

    // Golden outline button
    outline:
      "border border-[#DD901E] text-[#DD901E] hover:bg-[#FDF3E3] active:scale-95",
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

