import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold",
        "bg-black text-white",
        "border border-black",
        "shadow-sm shadow-black/30",
        "transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:border-white",
        className
      )}
    >
      {tech}
    </span>
  );
};
