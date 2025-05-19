import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", ...props },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50",
      variant === "default" && "bg-primary text-white hover:bg-primary/90",
      variant === "secondary" && "bg-muted text-foreground hover:bg-muted/80",
      variant === "outline" && "border border-foreground hover:bg-muted",
      variant === "ghost" && "hover:bg-muted",
      size === "default" && "h-10 px-4 py-2",
      size === "sm" && "h-9 rounded-md px-3",
      size === "lg" && "h-11 rounded-md px-8",
      size === "icon" && "h-10 w-10",
      className
    );
    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
