import { cn } from "@/lib/utils";

interface GradientCardProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}

export function GradientCard({ className, children, glowColor }: GradientCardProps) {
  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden transition-all duration-500",
      "bg-gradient-to-br from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-dark)/0.9)]",
      "hover:transform hover:scale-105",
      className
    )}>
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${glowColor || 'rgba(255,140,0,0.2)'}, transparent 70%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange)/0.3)] to-[hsl(var(--flame-red)/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}