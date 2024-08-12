import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import LeftBracket from "./LeftBracket";
import RightBracket from "./RightBracket";
import { usePathname } from "next/navigation";
import { LinkType } from "@/data/nav";
import { useRouter } from "next/router";

const variantsLeft = {
  hidden: { opacity: 0, x: "-10px" },
  show: { opacity: 1, x: "0px" },
};
const variantsRight = {
  hidden: { opacity: 0, x: "10px" },
  show: { opacity: 1, x: "0px" },
};

const Brackets = ({
  children,
  link,
}: {
  children: ReactNode;
  link: LinkType;
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    setIsActive(router.pathname === link.path);
  }, [router.pathname, link.path, setIsActive]);

  return (
    <div className="flex justify-center items-center w-fit relative z-50">
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="left-bracket"
            variants={variantsLeft}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, x: "-5px" }}
            className="absolute right-4 xl:right-3"
          >
            <LeftBracket />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="right-bracket"
            variants={variantsRight}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, x: "5px" }}
            className="absolute left-4 xl:left-3"
          >
            <RightBracket />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Brackets;
