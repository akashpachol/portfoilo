import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: Radix UI is peer dependent for Slot, if we don't have it we can just use simple polymorphic behavior or just div.
// For now, I'll use a simple implementation without Slot if user didn't ask for Radix specifically, but the "shadcn" style usually implies it.
// I'll stick to a simpler implementation first to avoid more dependency issues, or I can install @radix-ui/react-slot if needed. 
// Let's go with a simple button for now to avoid the extra dep unless requested.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-zinc-200",
                destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
                outline: "border border-zinc-800 bg-black hover:bg-zinc-900 text-white",
                secondary: "bg-zinc-800 text-white hover:bg-zinc-800/80",
                ghost: "hover:bg-zinc-800 hover:text-white",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 border-0",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
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
        // Simplified: No Slot for now to save install time, just standard button
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
