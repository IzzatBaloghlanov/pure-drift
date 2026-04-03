import Link from "next/link";
import { InstagramLogo, TwitterLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            PURE DRIFT
          </Link>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono tracking-widest uppercase">Est. 2026</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Story</Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Inquiries</Link>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <InstagramLogo size={20} />
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <TwitterLogo size={20} />
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <FacebookLogo size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
