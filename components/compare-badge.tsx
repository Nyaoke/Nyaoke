import { cn } from "@/lib/utils";

type CompareBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function CompareBadge({ children, className }: CompareBadgeProps) {
  return <span className={cn("text-xs font-medium text-green-600", className)}>{children}</span>;
}
