import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);
  return <motion.div className="fixed w-6 h-6 border-2 border-white rounded-full pointer-events-none z-50" animate={{
    x: position.x - 12,
    y: position.y - 12,
    scale: 1,
    opacity: 1
  }} transition={{
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }} />;
};