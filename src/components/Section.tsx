import type { ReactNode } from "react";

export default function Section({
  id,
  yamlKey,
  title,
  children,
}: {
  id: string;
  yamlKey: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="font-mono text-sm text-amber">{yamlKey}:</span>
          <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
