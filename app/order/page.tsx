'use client';
import { useState } from 'react';
const items = ['Kulhad Chai', 'Cheese Vada Pav', 'Nutella Bun'];
export default function OrderPage() {
  const [cart, setCart] = useState<string[]>([]);
  return <div className="py-10"><h1 className="font-serif text-5xl">Online Ordering</h1><div className="mt-5 grid gap-4 md:grid-cols-3">{items.map(i => <button key={i} onClick={() => setCart([...cart, i])} className="chai-glass rounded-2xl p-5 text-left hover:shadow-glow">{i}</button>)}</div><aside className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-72 border-l bg-zinc-900/90 p-4"><h2 className="font-serif text-2xl">Cart ({cart.length})</h2><ul className="mt-4 space-y-2">{cart.map((c,idx)=><li key={`${c}${idx}`}>{c}</li>)}</ul><button className="mt-6 w-full rounded-full bg-saffron py-3 font-semibold text-black">Checkout (Razorpay-ready)</button></aside></div>;
}
