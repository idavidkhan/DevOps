import type { Profile } from "@/data/types";
import Section from "./Section";

export default function Experience({ profile }: { profile: Profile }) {
  return (
    <Section id="experience" yamlKey="experience" title="Where I've worked">
      <div className="space-y-10">
        {profile.experience.map((job) => (
          <div key={job.title} className="relative border-l border-line pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-semibold text-fg">
                {job.title}
              </h3>
              <span className="font-mono text-xs text-amber-soft">
                {job.dates}
              </span>
            </div>
            <p className="mb-3 font-mono text-xs text-muted">
              {job.org} · {job.location}
            </p>
            <ul className="space-y-2">
              {job.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-sm leading-relaxed text-muted sm:text-[15px]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-soft" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
