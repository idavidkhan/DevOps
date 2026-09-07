import type { Profile } from "@/data/types";
import Section from "./Section";
import Tag from "./Tag";

export default function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" yamlKey="about" title="Summary">
      <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{profile.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {profile.competencies.map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>
    </Section>
  );
}
