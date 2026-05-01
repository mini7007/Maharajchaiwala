'use client';
import { motion } from 'framer-motion';

export function FadeUp({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.7 }}>{children}</motion.div>;
}

export function ChaiLoader() {
  return (
    <div className="relative h-44 w-36 rounded-b-[40px] rounded-t-[20px] border-4 border-clay bg-black/20 p-2">
      <motion.div className="absolute bottom-2 left-2 right-2 rounded-b-[30px] bg-gradient-to-t from-clay to-saffron" animate={{ height: ['5%', '92%', '30%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="steam absolute left-1/2 top-2 -translate-x-1/2" />
    </div>
  );
}
