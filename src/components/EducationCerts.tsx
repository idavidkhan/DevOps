import type { Profile } from "@/data/types";
import Section from "./Section";

export default function EducationCerts({ profile }: { profile: Profile }) {
  return (
    <Section
      id="education"
      yamlKey="education"
      title="Education & certifications"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Degree
          </p>
          {profile.education.map((e) => (
            <div key={e.degree} className="mb-4">
              <p className="font-display text-base font-semibold text-fg">
                {e.degree}
              </p>
              <p className="font-mono text-xs text-muted">{e.school}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Certifications & training
          </p>
          <ul className="space-y-2">
            {profile.certifications.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-soft" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
