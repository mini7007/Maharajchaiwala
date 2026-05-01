'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StorySections() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((item) => {
        gsap.fromTo(item, { y: 80, opacity: 0, filter: 'blur(8px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2,
          scrollTrigger: { trigger: item, start: 'top 85%', end: 'bottom 45%' },
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.chai-lab',
          start: 'top top',
          end: '+=2200',
          pin: true,
          scrub: 1,
        },
      });
      timeline.to('.stage-1', { opacity: 1, scale: 1.03 }).to('.stage-1', { opacity: 0.15 })
        .to('.stage-2', { opacity: 1, x: 0 }).to('.stage-2', { opacity: 0.2 })
        .to('.stage-3', { opacity: 1, rotate: 0 }).to('.stage-3', { opacity: 0.25 })
        .to('.stage-4', { opacity: 1, y: 0, scale: 1.06 });

      gsap.to('.parallax-bg', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '.parallax-wrap', scrub: true } });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="space-y-24 py-20">
      <section className="parallax-wrap relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1d0e08] p-10 text-white">
        <div className="parallax-bg absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(243,168,96,.2),transparent_60%)]" />
        <h2 data-reveal className="relative font-serif text-4xl">Brand Story</h2>
        <p data-reveal className="relative mt-4 max-w-2xl text-zinc-200">Every kulhad carries smoke from the clay kiln, the hiss of masala in boiling milk, and stories shared roadside under amber lights.</p>
      </section>

      <section className="chai-lab rounded-[2rem] border border-amber-200/20 bg-black/40 p-10 text-white">
        <h3 className="font-serif text-3xl">Live Chai Making</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="stage-1 opacity-20 rounded-2xl bg-orange-200/10 p-6">1. Milk boiling • bubble physics</div>
          <div className="stage-2 translate-x-10 opacity-20 rounded-2xl bg-amber-200/10 p-6">2. Tea pouring • liquid swirl</div>
          <div className="stage-3 -rotate-3 opacity-20 rounded-2xl bg-red-200/10 p-6">3. Masala particles spreading</div>
          <div className="stage-4 translate-y-8 opacity-20 rounded-2xl bg-yellow-100/10 p-6">4. Steam rise • final kulhad served</div>
        </div>
      </section>
    </div>
  );
}
