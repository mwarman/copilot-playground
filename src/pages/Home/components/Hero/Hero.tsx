import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <div className={cn("py-10 md:py-16 lg:py-20 text-center", className)}>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Welcome to the Copilot Playground
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        A space to explore and experiment with GitHub Copilot&apos;s
        capabilities
      </p>
    </div>
  );
}
