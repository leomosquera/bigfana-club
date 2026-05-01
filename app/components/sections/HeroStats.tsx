import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Star, Trophy, Ticket } from "lucide-react";

/* ── Counter hook ───────────────────────────── */
function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

/* ── Stat item ───────────────────────────── */
function Stat({
  icon: Icon,
  value,
  label,
  suffix = "",
}: {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
}) {
  const count = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        group
        flex items-center gap-3
        transition-all duration-300
      "
    >
      {/* ICON */}
      <div
        className="
          flex size-12 items-center justify-center
          rounded-xl
          bg-gradient-to-br from-white/20 to-white/5
          backdrop-blur-md
          border border-[#FF2D55]/20
          text-white
          transition-all duration-300
          group-hover:scale-105
          group-hover:border-[#FF2D55]/40
          group-hover:shadow-[0_0_20px_rgba(255,45,85,0.2)]
        "
      >
        <Icon className="size-5 opacity-90" />
      </div>

      {/* TEXT */}
      <div>
        <p className="
          text-xl
          md:text-2xl
          font-bold
          text-white
          tracking-tight
          leading-none
        ">
          {count.toLocaleString()}
          {suffix}
        </p>

        <p className="text-xs text-white/60 mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Export block ───────────────────────────── */
export default function HeroStats() {
  return (
    <div className="flex flex-wrap items-center gap-10 mt-10">

      <Stat icon={Users} value={120000} suffix="+" label="Fans activos" />

      <Stat icon={Star} value={50} suffix="+" label="Clubes" />

      <Stat icon={Trophy} value={1000000} suffix="+" label="Puntos entregados" />

      <Stat icon={Ticket} value={300} suffix="+" label="Experiencias" />

    </div>
  );
}