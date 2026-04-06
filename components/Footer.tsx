import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-bold text-sm tracking-widest text-muted">
            BREVIKO
          </span>
          <span className="text-muted/40 text-xs">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/impressum"
            className="hover:text-amber transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-amber transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
