import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ClassicalButtonProps extends Omit<React.ComponentProps<typeof Button>, 'variant'> {
  variant?: "classical" | "outline" | "ghost";
}

export const ClassicalButton = forwardRef<HTMLButtonElement, ClassicalButtonProps>(
  ({ className, variant = "classical", ...props }, ref) => {
    const variants = {
      classical: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-classical border-0",
      outline: "border-2 border-primary text-primary hover:bg-primary/10 bg-transparent",
      ghost: "text-primary hover:bg-primary/5 bg-transparent border-0"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

ClassicalButton.displayName = "ClassicalButton";