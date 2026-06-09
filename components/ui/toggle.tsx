"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-rc-border bg-white text-sm font-medium transition-colors duration-150 hover:bg-rc-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rc-text focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:border-rc-text data-[state=on]:bg-rc-text data-[state=on]:text-white",
  {
    variants: {
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ size, className }))} {...props} />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
