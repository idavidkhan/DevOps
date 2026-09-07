import type { Profile } from "@/data/types";
import Section from "./Section";

export default function Projects({ profile }: { profile: Profile }) {
  return (
    <Section id="projects" yamlKey="projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-lg border border-line bg-panel p-5 transition-colors hover:border-teal/50"
          >
            <h3 className="font-display text-base font-semibold text-fg">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-line bg-panel2 px-2 py-0.5 font-mono text-[11px] text-teal-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-flex w-fit items-center gap-1 font-mono text-xs text-amber-soft transition-colors hover:text-amber"
              >
                {project.link_label ?? "View"}
                <span aria-hidden="true">⟶</span>
              </a>
            )}
            {project.demo_link && (
              <a
                href={project.demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 inline-flex w-fit items-center gap-1 font-mono text-xs text-teal-soft transition-colors hover:text-teal"
              >
                {project.demo_label ?? "Live Demo"}
                <span aria-hidden="true">⟶</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
