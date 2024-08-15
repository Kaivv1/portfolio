"use client";
import Link from "next/link";
import Brackets from "./Brackets";
import { navData } from "@/data/nav";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="bottom-0 fixed right-0 w-full xl:w-fit xl:right-6 bg-transparent xl:h-screen z-50 xl:flex xl:justify-center xl:items-center">
      <ul className="flex xl:rounded-full bg-background  xl:bg-white/10 xl:backdrop-blur-[4px] p-3 xl:p-4 justify-center gap-10 xl:h-[15.5rem] items-center xl:flex-col ">
        {navData.map((link) => (
          <Brackets key={link.name} link={link}>
            <Link href={link.path} className="relative">
              <link.icon
                className={`hover:stroke-primary duration-200 xl:size-5 ${
                  router.pathname === link.path && "text-primary"
                }`}
              />
            </Link>
          </Brackets>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
