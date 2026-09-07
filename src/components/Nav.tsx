import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/nav";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open; restore it exactly on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e14]">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#top" className="focus-ring rounded font-bold">
          Muhammad Dawood
        </a>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm text-muted transition-colors hover:text-teal-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="focus-ring rounded p-2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <i
            className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Backdrop: dims the portfolio behind the drawer, closes it on click */}
      <div
        className={`absolute inset-x-0 top-full h-dvh bg-black/50 transition-opacity duration-300 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div
        id="mobile-nav-drawer"
        className={`absolute top-full left-0 h-dvh w-[min(88vw,380px)] border-r border-white/10 bg-[#0a0e14] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        inert={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded border-b border-line/50 py-4 text-lg text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
