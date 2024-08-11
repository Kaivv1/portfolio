"use client";
import { navData } from "@/data/nav";
import Link from "next/link";
import Brackets from "./Brackets";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="bottom-0 fixed right-0 w-full xl:w-fit xl:right-6 bg-transparent xl:h-screen z-50 xl:flex xl:justify-center xl:items-center">
      <ul className="flex xl:rounded-full bg-white/10  p-4 justify-center gap-9 xl:h-[15.5rem] items-center xl:flex-col backdrop-blur-lg">
        {navData.map((link) => (
          <Brackets key={link.name} link={link}>
            <Link href={link.path} className="relative">
              <link.icon
                className={`hover:stroke-primary duration-200 xl:size-5 ${
                  pathname === link.path && "text-primary"
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
