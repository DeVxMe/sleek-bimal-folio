import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "bg-badge-bg text-badge-text shadow-subtle",
        "transition-all duration-300 hover:scale-105 hover:shadow-card",
        className
      )}
    >
      {tech}
    </span>
  );
};