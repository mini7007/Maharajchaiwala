'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const PageTransition = dynamic(() => import('./page-transition'), { ssr: false, loading: () => <>{null}</> });

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  console.log('[LayoutShell] render');
  return (
    <div className="min-h-screen bg-chai">
      <header className="sticky top-0 z-50 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 p-4 backdrop-blur-lg">
        <Link href="/" className="text-xl font-serif tracking-wide">Maharaj Chai Wala</Link>
        <nav className="flex flex-wrap gap-3 text-sm">
          {['menu', 'stores', 'order', 'about', 'franchise'].map((p) => <Link key={p} href={`/${p}`} className="hover:text-saffron capitalize">{p}</Link>)}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full border px-3">Mode</button>
        </nav>
      </header>
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Link href="/order" className="fixed bottom-4 right-4 rounded-full bg-saffron px-4 py-3 text-sm font-semibold text-black shadow-glow md:bottom-6 md:right-6 md:px-5">Quick Order</Link>
    </div>
  );
}
