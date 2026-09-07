import { useEffect, useState, type FormEvent } from "react";
import type { Profile } from "@/data/types";
import Section from "./Section";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpgakrd";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Hide the success message on its own after a few seconds.
  useEffect(() => {
    if (status !== "ok") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
        return;
      }

      const body = await res.json().catch(() => null);
      const message =
        body?.errors
          ?.map((err: { message: string }) => err.message)
          .join(", ") ?? "Something went wrong. Please try again.";
      throw new Error(message);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Couldn't send the message. Please try again.",
      );
    }
  }

  return (
    <Section id="contact" yamlKey="contact" title="Get in touch">
      <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Have a role, project, or collaboration in mind? Send a message and
            I&apos;ll reply by email.
          </p>
          <dl className="mt-6 space-y-2 font-mono text-xs text-muted">
            <div className="flex gap-2">
              <dt className="text-teal-soft">email:</dt>
              <dd>{profile.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-teal-soft">phone:</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-teal-soft">location:</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 text-teal-soft underline"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              linkedin ⟶
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 text-teal-soft underline"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
              github ⟶
            </a>
            <a
              href={profile.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 text-teal-soft underline"
            >
              <i className="fa-solid fa-calendar-days" aria-hidden="true" />
              book a call ⟶
            </a>
          </div>
        </div>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* email subject for Formspree notifications */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact - Muhammad Dawood"
          />
          {/* honeypot - bots fill this, humans don't */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-mono text-xs text-muted"
            >
              name
            </label>
            <input
              id="name"
              name="name"
              required
              className="focus-ring w-full rounded-md border border-line bg-panel px-3 py-2 text-sm text-fg outline-none placeholder:text-muted/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-mono text-xs text-muted"
            >
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="focus-ring w-full rounded-md border border-line bg-panel px-3 py-2 text-sm text-fg outline-none placeholder:text-muted/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-xs text-muted"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="themed-scrollbar focus-ring w-full rounded-md border border-line bg-panel px-3 py-2 text-sm text-fg outline-none placeholder:text-muted/50"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring rounded-md bg-amber px-5 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "sending…" : "send message ⟶"}
          </button>

          {status === "ok" && (
            <p role="status" className="font-mono text-xs text-teal-soft">
              Message sent - thank you! I&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="font-mono text-xs text-[#E8846A]">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
