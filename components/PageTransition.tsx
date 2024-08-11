"use client";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default PageTransition;
