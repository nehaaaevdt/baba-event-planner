"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fdfaf7]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.06,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative h-40 w-75 sm:h-40 sm:w-90">
                <Image
                    src="/images/baba-logo.jpg"
                    alt="Baba Event Planner"
                    fill
                    priority
                    className="object-contain"
            />
            </div>

            <div className="mt-6 text-2xl text-[#DD901E]">
            ✦
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}