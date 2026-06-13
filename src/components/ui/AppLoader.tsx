"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SplashScreen from "./SplashScreen";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {children}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-9999 bg-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
