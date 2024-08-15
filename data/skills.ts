import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";

export const skills: {
  id: number;
  icon: IconType;
}[] = [
  {
    id: 1,
    icon: FaHtml5,
  },
  {
    id: 2,
    icon: FaCss3,
  },
  {
    id: 3,
    icon: SiTailwindcss,
  },
  {
    id: 4,
    icon: FaSass,
  },
  {
    id: 5,
    icon: FaJs,
  },
  {
    id: 6,
    icon: FaReact,
  },
  {
    id: 7,
    icon: SiTypescript,
  },
  {
    id: 8,
    icon: FaNodeJs,
  },
  {
    id: 9,
    icon: SiExpress,
  },
  {
    id: 10,
    icon: SiMongodb,
  },
  {
    id: 11,
    icon: SiPostgresql,
  },
  {
    id: 12,
    icon: FaGolang,
  },
  {
    id: 13,
    icon: RiNextjsFill,
  },
  {
    id: 14,
    icon: FaGitAlt,
  },
];
