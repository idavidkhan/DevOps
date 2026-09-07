export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {name}
        </span>
        <span>built with react + vite</span>
      </div>
    </footer>
  );
}
