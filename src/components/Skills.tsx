import type { Profile } from "@/data/types";
import Section from "./Section";
import Tag from "./Tag";

export default function Skills({ profile }: { profile: Profile }) {
  return (
    <Section id="skills" yamlKey="skills" title="What I work with">
      <div className="space-y-6">
        {profile.skills.map((group) => (
          <div key={group.group}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
