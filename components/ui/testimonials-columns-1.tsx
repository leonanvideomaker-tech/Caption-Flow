"use client";
import React from "react";
import { motion } from "motion/react";

interface FeedbackItem {
  src: string;
  alt?: string;
}

export const TestimonialsColumn = ({
  items,
  duration = 15,
  className,
}: {
  items: FeedbackItem[];
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...Array(2)].map((_, pass) => (
          <React.Fragment key={pass}>
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <img
                  src={item.src}
                  alt={item.alt ?? `Feedback ${i + 1}`}
                  className="w-full block"
                  draggable={false}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
