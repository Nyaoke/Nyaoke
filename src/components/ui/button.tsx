import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-body-sm font-medium transition-colors duration-hover ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ink-primary text-canvas hover:bg-ink-secondary",
        accent:
          "bg-accent text-canvas hover:bg-ink-secondary dark:text-ink-primary",
        outline:
          "border border-default bg-transparent text-ink-primary hover:bg-subtle",
        ghost: "text-ink-primary hover:bg-subtle",
        link: "text-ink-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 rounded-input",
        sm: "h-8 px-4 rounded-input text-caption",
        lg: "h-12 px-6 rounded-input text-body",
        pill: "h-10 px-5 rounded-pill",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
