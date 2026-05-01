'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export default function GSAPProvider() {
  useEffect(() => {
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

    return () => {
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return null;
}
