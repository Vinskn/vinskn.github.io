import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [showText, setShowText] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);
  const navaTitle = "NAVA System";

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setHideSplash(true);
      onFinish?.(); 
    }, 4500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hideSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        >

          <svg width="300" height="300" viewBox="0 0 300 300" className="absolute">
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff5252" />
                <stop offset="25%" stopColor="#ff1744" />
                <stop offset="50%" stopColor="#d50000" />
                <stop offset="75%" stopColor="#9a0007" />
                <stop offset="100%" stopColor="#ff5252" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff3d00" />
              </filter>
            </defs>

            <motion.circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              filter="url(#glow)"
            />
          </svg>

          <Image
            src={"/Nava Logo.png"}
            width={200}
            height={200}
            alt="Nava Logo"
            className="z-10"
          />

          {showText && (
            <motion.div className="flex gap-1 z-10 absolute bottom-1/5">
              {navaTitle.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                  animate={{ opacity: 1, letterSpacing: "0.01em" }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="text-white text-3xl font-semibold"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
