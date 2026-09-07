import type { Profile } from "@/data/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-teal-soft">
              model-card // portfolio.yaml
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-fg sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-lg text-amber-soft sm:text-xl">
              {profile.role}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* scrolls to the contact form, not mailto */}
              <a
                href="#contact"
                className="focus-ring rounded-md bg-amber px-5 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                say hello ⟶
              </a>
              <a
                href="#projects"
                className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-xs font-medium text-fg transition-colors hover:border-teal hover:text-teal-soft"
              >
                view projects
              </a>
            </div>
          </div>

          {/* yaml-style metadata card */}
          <div className="rounded-lg border border-line bg-panel/80 p-5 font-mono text-xs shadow-2xl shadow-black/40 sm:text-sm">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4B5A6B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4B5A6B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4B5A6B]" />
            </div>
            <dl className="space-y-2">
              <Row k="name" v={profile.name} />
              <Row k="role" v={profile.role} />
              <Row k="location" v={profile.location} />
              <Row k="email" v={profile.email} />
              <Row k="phone" v={profile.phone} />
              <Row k="status" v={profile.status} accent />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 text-teal-soft">{k}:</dt>
      <dd className={accent ? "text-amber" : "text-fg/90"}>{v}</dd>
    </div>
  );
}
