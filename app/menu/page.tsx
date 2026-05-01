'use client';
import { useState } from 'react';
import { FadeUp } from '@/components/motion';
const items = [
  { n: 'Kulhad Chai', c: 'Chai' }, { n: 'Masala Tea', c: 'Chai' }, { n: 'Cheese Vada Pav', c: 'Snacks' },
  { n: 'Nutella Bun', c: 'Specials' }, { n: 'Rose Cooler', c: 'Coolers' }
];
export default function MenuPage() {
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Chai', 'Coolers', 'Snacks', 'Specials'];
  return <div className="py-10"><h1 className="font-serif text-5xl">Signature Menu</h1><div className="my-6 flex gap-2">{cats.map(c => <button key={c} onClick={() => setCat(c)} className="rounded-full border px-4 py-2">{c}</button>)}</div><div className="grid gap-4 md:grid-cols-3">{items.filter(i => cat === 'All' || i.c === cat).map(i => <FadeUp key={i.n}><div className="chai-glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow"><p className="text-xs text-saffron">{i.c}</p><h3 className="font-serif text-2xl">{i.n}</h3></div></FadeUp>)}</div></div>;
}
