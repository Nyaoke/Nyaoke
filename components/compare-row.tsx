import { cn } from "@/lib/utils";

type CompareRowProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function CompareRow({ label, children, className }: CompareRowProps) {
  return (
    <div className={cn("grid grid-cols-[10rem_minmax(0,1fr)] border-b border-rc-border lg:grid-cols-[10rem_repeat(auto-fit,minmax(16rem,1fr))]", className)}>
      <div className="sticky left-0 z-10 flex items-start bg-white px-4 py-4 text-sm text-neutral-700">{label}</div>
      <div className="contents">{children}</div>
    </div>
  );
}

type CompareCellProps = {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
};

export function CompareCell({ children, highlighted = false, className }: CompareCellProps) {
  return (
    <div
      className={cn(
        "min-w-64 snap-start px-4 py-4 lg:min-w-64",
        highlighted && "border-l-2 border-green-600",
        className,
      )}
    >
      {children}
    </div>
  );
}
