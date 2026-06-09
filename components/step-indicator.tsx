import { cn } from "@/lib/utils";

const steps = [
  { number: "1", title: "Choose your", label: "Diamond", active: true },
  { number: "2", title: "Choose your", label: "Setting", helper: "Browse", active: false },
  { number: "3", title: "Complete", label: "Ring", active: false },
];

export function StepIndicator() {
  return (
    <div className="border-b border-rc-border bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-5">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex min-w-28 items-center gap-3">
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-medium",
                  step.active ? "border-rc-text bg-rc-text text-white" : "border-rc-border bg-white text-rc-muted",
                )}
              >
                {step.number}
              </span>
              <span className={cn("leading-tight", step.active ? "text-rc-text" : "text-rc-muted")}>
                <span className="block text-xs">{step.title}</span>
                <span className="block text-sm font-medium">{step.label}</span>
                {step.helper ? <span className="block text-[11px]">{step.helper}</span> : null}
              </span>
            </div>
            {index < steps.length - 1 ? <span className="mx-5 hidden h-px w-20 bg-rc-border sm:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
