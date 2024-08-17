import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export type ProjectType = {
  name: string;
  description: string;
  stack: {
    icon: IconType;
  }[];
  showModal: boolean;
  linkRepo: string;
  linkLiveDemo?: string;
  image: string;
};

export const projects: ProjectType[] = [
  {
    name: "Personal Portfolio",
    description:
      "A portfolio website where I can showcase my skills and projects.",
    linkRepo: "https://github.com/Kaivv1/portfolio",
    showModal: false,
    image: "/portfolio.png",
    stack: [
      { icon: RiNextjsFill },
      { icon: SiTailwindcss },
      { icon: SiTypescript },
    ],
  },
  {
    name: "File Drive",
    description:
      "File drive is an application that allows users to store, manage and access files online.",
    linkRepo: "https://github.com/Kaivv1/Typescript-Express-React-Prisma",
    showModal: true,
    image: "/filedrive.png",
    linkLiveDemo: "https://file-drive-orpin.vercel.app",
    stack: [
      { icon: FaReact },
      { icon: SiTailwindcss },
      { icon: SiTypescript },
      { icon: SiExpress },
      { icon: FaNodeJs },
      { icon: SiPrisma },
      { icon: SiPostgresql },
    ],
  },
  {
    name: "BroStyle Dashboard",
    description:
      "Sales dashboard for an e-commerce shop named BroStyle that can also simulate orders to demonstrate it's full functionality.",
    showModal: false,
    image: "/brostyle.png",
    linkLiveDemo: "https://bro-style-dashboard.vercel.app",
    linkRepo: "https://github.com/Kaivv1/BroStyle-Dashboard",
    stack: [{ icon: FaReact }, { icon: SiTailwindcss }, { icon: SiSupabase }],
  },
  {
    name: "VillaHaven",
    description:
      "VillaHaven is a website for a company that offers vacation villas and houses for you to rent.",
    showModal: true,
    image: "/villahaven.png",
    linkLiveDemo: "https://villa-haven.vercel.app/register",
    linkRepo: "https://github.com/Kaivv1/VillaHaven",
    stack: [
      { icon: FaReact },
      { icon: FaSass },
      { icon: FaNodeJs },
      { icon: SiExpress },
      { icon: SiMongodb },
    ],
  },
];
