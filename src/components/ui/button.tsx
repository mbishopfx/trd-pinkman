import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "portola-button hover:elegant-shadow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "portola-button-outline hover:elegant-shadow",
        secondary: "elegant-card bg-stone-100 text-stone-800 hover:bg-stone-200",
        ghost: "hover:bg-stone-100/50 hover:text-stone-900 text-stone-700",
        link: "text-warm-700 underline-offset-4 hover:underline hover:text-warm-800",
        gradient: "bg-gradient-to-r from-stone-700 to-stone-800 text-white hover:from-stone-800 hover:to-stone-900 elegant-shadow hover:elegant-shadow-lg hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-r from-warm-400/20 to-sage-400/20 rounded-sm animate-pulse" />
        )}
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
