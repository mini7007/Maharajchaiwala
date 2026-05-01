'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-chai">
      <header className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-serif tracking-wide">Maharaj Chai Wala</Link>
        <nav className="flex gap-3 text-sm">
          {['menu', 'stores', 'order', 'about', 'franchise'].map((p) => <Link key={p} href={`/${p}`} className="hover:text-saffron capitalize">{p}</Link>)}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full border px-3">Mode</button>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 pb-24">{children}</main>
      <Link href="/order" className="fixed bottom-6 right-6 rounded-full bg-saffron px-5 py-3 font-semibold text-black shadow-glow">Quick Order</Link>
    </div>
  );
}
