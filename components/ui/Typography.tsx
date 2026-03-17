import React from "react";
import { cn } from "@/lib/utils";

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-3xl md:text-5xl font-semibold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl md:text-3xl font-medium tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function P({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base md:text-lg text-zinc-400 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}
