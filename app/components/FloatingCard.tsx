"use client";

import { motion } from "framer-motion";

export default function FloatingCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        rounded-xl
        px-4 py-3
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
      "
    >
      <p className="text-xs text-white/60">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </motion.div>
  );
}