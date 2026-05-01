'use client';
import { FadeUp, ChaiLoader } from '@/components/motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const StorySections = dynamic(() => import('@/components/story-sections'), { ssr: false });

export default function HomePage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Morning Chai Ritual' : hour < 18 ? 'Afternoon Energy Pour' : 'Evening Chai Mehfil';
  const [ctaBoost, setCtaBoost] = useState(false);

  useEffect(() => {
    console.log('[HomePage] render complete');
  }, []);

  return (
    <div className="space-y-12 py-8 md:space-y-16 md:py-10">
      <section className="hero-bg relative grid items-center gap-8 overflow-hidden rounded-[2rem] p-5 md:grid-cols-2 md:gap-10 md:p-10">
        <FadeUp>
          <p className="text-saffron">{greeting}</p>
          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">Har Ghoont Mein Maharaj</h1>
          <p className="mt-4 max-w-xl text-zinc-300">A cinematic PWA that lets you feel the aroma, warmth, and rhythm of Indian street chai culture.</p>
          <div className="mt-8 flex gap-4" onMouseEnter={() => setCtaBoost(true)} onMouseLeave={() => setCtaBoost(false)}>
            <a href="/order" className="rounded-full bg-saffron px-6 py-3 font-semibold text-black">Order Now</a>
            <a href="/stores" className="rounded-full border px-6 py-3 text-white">Find Nearest Outlet</a>
          </div>
        </FadeUp>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="justify-self-center w-full max-w-md">
          <ChaiLoader ctaBoost={ctaBoost} />
        </motion.div>
      </section>
      <StorySections />
    </div>
  );
}
