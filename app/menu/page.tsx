'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { n: 'Kulhad Chai', c: 'Chai', p: '₹40' }, { n: 'Masala Tea', c: 'Chai', p: '₹45' }, { n: 'Cheese Vada Pav', c: 'Snacks', p: '₹90' },
  { n: 'Nutella Bun', c: 'Specials', p: '₹110' }, { n: 'Rose Cooler', c: 'Coolers', p: '₹120' }
];

export default function MenuPage() {
  const [cat, setCat] = useState('All');
  const [cart, setCart] = useState(0);
  const [flying, setFlying] = useState<string | null>(null);
  const cats = ['All', 'Chai', 'Coolers', 'Snacks', 'Specials'];
  return (
    <div className="py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-5xl">Signature Menu</h1>
        <motion.div layout className="rounded-full border border-amber-400/50 bg-black/20 px-4 py-2">Cart {cart}</motion.div>
      </div>
      <div className="my-6 flex gap-2">{cats.map(c => <button key={c} onClick={() => setCat(c)} className="rounded-full border px-4 py-2">{c}</button>)}</div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.filter(i => cat === 'All' || i.c === cat).map(i => (
          <motion.div
            key={i.n}
            className="group chai-glass relative overflow-hidden rounded-2xl p-5"
            whileHover={{ y: -8, rotateX: 6, rotateY: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(255,153,86,.25)' }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.3s_linear]" />
            <p className="text-xs text-saffron">{i.c}</p><h3 className="font-serif text-2xl">{i.n}</h3><p className="mt-2">{i.p}</p>
            <button
              onClick={() => { setFlying(i.n); setTimeout(() => { setCart(v => v + 1); setFlying(null); }, 550); }}
              className="mt-4 rounded-full bg-saffron px-4 py-2 text-black"
            >Add to cart</button>
            {flying === i.n && <motion.div className="absolute bottom-8 left-8 h-4 w-4 rounded-full bg-saffron" initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: 520, y: -380, opacity: 0.1, scale: 0.3 }} transition={{ duration: 0.55 }} />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
