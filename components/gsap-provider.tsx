'use client';
import { useEffect } from 'react';

let registered = false;

export default function GSAPProvider() {
  useEffect(() => {
    console.log('[GSAPProvider] mounted');
    if (typeof window === 'undefined') return;
    let scrollTriggerRef: { clearScrollMemory: () => void } | null = null;
    let isMounted = true;

    (async () => {
      try {
        const gsapModule = await import('gsap');
        const triggerModule = await import('gsap/ScrollTrigger');
        if (!isMounted) return;
        const gsap = gsapModule.default;
        const ScrollTrigger = triggerModule.ScrollTrigger;
        scrollTriggerRef = ScrollTrigger;

        if (!registered) {
          gsap.registerPlugin(ScrollTrigger);
          gsap.config({ force3D: true, nullTargetWarn: false });
          registered = true;
        }

        ScrollTrigger.defaults({
          scrub: 0.7,
          markers: false,
          invalidateOnRefresh: true,
        });
      } catch (error) {
        console.log('[GSAPProvider] GSAP unavailable, continuing without animations', error);
      }
    })();

    return () => {
      isMounted = false;
      scrollTriggerRef?.clearScrollMemory();
    };
  }, []);

  return null;
}
