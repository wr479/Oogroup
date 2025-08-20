import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "outline" | "ghost" | "secondary";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case "outline":
      return "border border-[--color-foreground]/15 bg-transparent hover:bg-[--color-foreground]/5";
    case "ghost":
      return "bg-transparent hover:bg-[--color-foreground]/5";
    case "secondary":
      return "bg-[--color-foreground]/10 text-foreground hover:bg-[--color-foreground]/15";
    case "default":
    default:
      return "bg-foreground text-background hover:bg-[--color-foreground]/90";
  }
}

function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case "sm":
      return "h-9 px-3 text-sm";
    case "lg":
      return "h-12 px-6 text-base";
    case "icon":
      return "h-10 w-10";
    case "md":
    default:
      return "h-10 px-4 text-sm";
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
          "ring-offset-background",
          getVariantClasses(variant),
          getSizeClasses(size),
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";


