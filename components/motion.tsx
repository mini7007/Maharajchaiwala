'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function FadeUp({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.7 }}>{children}</motion.div>;
}

function useScrollTilt() {
  const scrollY = useMotionValue(0);
  const rotate = useTransform(scrollY, [0, 500], [-4, 5]);
  const smoothRotate = useSpring(rotate, { stiffness: 80, damping: 16 });

  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  return smoothRotate;
}

export function ChaiLoader({ ctaBoost = false }: { ctaBoost?: boolean }) {
  console.log('[ChaiLoader] render');
  const [fill, setFill] = useState(0);
  const [steamBoost, setSteamBoost] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const rotate = useScrollTilt();

  useEffect(() => {
    let start: number | null = null;
    const duration = 2100;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setFill(0.08 + p * 0.8);
      if (p < 1) requestAnimationFrame(step);
      else {
        setTimeout(() => setFill(0.84), 80);
        setTimeout(() => setFill(0.82), 180);
      }
    };
    requestAnimationFrame(step);
  }, []);

  const steamNodes = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        left: 36 + i * 22 + (i % 2 ? 5 : -3),
        delay: i * 0.22,
        duration: 3 + (i % 3) * 0.45,
        scale: 0.78 + (i % 4) * 0.11,
      })),
    []
  );

  const playTap = () => {
    if (typeof window === 'undefined') return;
    if (!soundOn) return;
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 220;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  };

  return (
    <div className="relative w-[320px] max-w-full">
      <div className="hero-glow" />
      <div className="hero-noise" />
      <div className="absolute inset-x-0 top-0 h-44">
        {steamNodes.map((s) => (
          <motion.span
            key={s.id}
            className="steam-particle"
            style={{ left: s.left }}
            animate={{ y: [-2, -82], opacity: [0, steamBoost || ctaBoost ? 0.5 : 0.34, 0], scale: [0.86, s.scale, 1.2] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="relative mx-auto mt-12 w-[250px] cursor-pointer"
        style={{ rotate }}
        whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 22px rgba(214,119,58,0.45))' }}
        onHoverStart={() => setSteamBoost(true)}
        onHoverEnd={() => setSteamBoost(false)}
        onClick={() => {
          playTap();
          if (navigator.vibrate) navigator.vibrate(22);
        }}
      >
        <svg viewBox="0 0 300 270" className="w-full" aria-label="Handmade kulhad with chai">
          <defs>
            <linearGradient id="clayBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ce7a3e" />
              <stop offset="68%" stopColor="#9c5129" />
              <stop offset="100%" stopColor="#7e3c20" />
            </linearGradient>
            <linearGradient id="chaiFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e1a157" />
              <stop offset="100%" stopColor="#a1592d" />
            </linearGradient>
            <clipPath id="kulhadClip">
              <path d="M44 72 C63 61, 102 58, 150 60 C196 58, 239 64, 258 77 C254 170, 232 225, 150 235 C72 226, 48 176, 44 72 Z" />
            </clipPath>
          </defs>

          <path d="M42 72 C61 57, 101 55, 150 58 C199 55, 241 63, 260 79" stroke="#6f3119" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M44 72 C63 61, 102 58, 150 60 C196 58, 239 64, 258 77 C254 170, 232 225, 150 235 C72 226, 48 176, 44 72 Z" fill="url(#clayBody)" stroke="#6a341c" strokeWidth="4" />
          <path d="M67 110 C100 99, 126 103, 153 98" stroke="rgba(86,42,20,.45)" strokeWidth="3" strokeLinecap="round" />

          <g clipPath="url(#kulhadClip)">
            <rect x="25" y={250 - fill * 190} width="250" height={fill * 190} fill="url(#chaiFill)" opacity="0.95" />
            <path d="M50 120 C90 112, 120 115, 154 112 C190 108, 218 114, 248 123" fill="none" stroke="rgba(255,240,218,0.24)" strokeWidth="3" />
          </g>
        </svg>

        <motion.div className="pour-stream" animate={{ opacity: [0.15, 0.45, 0.2], scaleY: [0.9, 1.06, 1] }} transition={{ duration: 0.8, repeat: 3, ease: 'easeInOut' }} />
        {[0, 1, 2].map((n) => (
          <motion.span key={n} className="droplet" style={{ left: 125 + n * 10 }} animate={{ y: [-8, 92], opacity: [0, 0.9, 0] }} transition={{ duration: 0.7, repeat: 3, delay: n * 0.16, ease: 'easeIn' }} />
        ))}
      </motion.div>

      <button className="mt-6 rounded-full border border-black/15 bg-white/45 px-4 py-2 text-sm font-medium backdrop-blur" onClick={() => setSoundOn((v) => !v)}>
        Sound {soundOn ? 'On' : 'Off'}
      </button>
    </div>
  );
}
