import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-panel2 px-3 py-1 font-mono text-xs text-teal-soft">
      {children}
    </span>
  );
}
