'use client';
import { FadeUp, ChaiLoader } from '@/components/motion';
import { motion } from 'framer-motion';

export default function HomePage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Morning Chai Ritual' : hour < 18 ? 'Afternoon Energy Pour' : 'Evening Chai Mehfil';
  return (
    <div className="space-y-16 py-10">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <FadeUp>
          <p className="text-saffron">{greeting}</p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">Har Ghoont Mein Maharaj</h1>
          <p className="mt-4 max-w-xl text-zinc-300">An immersive PWA blending the soul of Indian street chai with cinematic modern craft.</p>
          <div className="mt-8 flex gap-4">
            <a href="/order" className="rounded-full bg-saffron px-6 py-3 font-semibold text-black">Order Now</a>
            <a href="/stores" className="rounded-full border px-6 py-3">Find Nearest Outlet</a>
          </div>
        </FadeUp>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="justify-self-center">
          <ChaiLoader />
        </motion.div>
      </section>
      <section className="chai-glass rounded-3xl p-8">
        <h2 className="font-serif text-3xl">Steam, Sound & Story</h2>
        <p className="mt-3">Includes steam FX, hover micro-interactions, sound toggle stub, motion transitions, and shake-ready easter egg hook.</p>
      </section>
    </div>
  );
}
