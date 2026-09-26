import { AFFILIATE_URL } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-150 shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

const VARIANTS = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-slate-300 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-700",
  light: "bg-white text-brand-700 hover:bg-brand-50",
} as const;

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

/** Primary conversion CTA — always routes through the affiliate link. */
export function CtaLink({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </a>
  );
}
