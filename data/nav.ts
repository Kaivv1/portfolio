import { AppWindow, House, LucideIcon, Mail, User } from "lucide-react";
import { IconType } from "react-icons";
export type LinkType = {
  name: string;
  path: string;
  icon: LucideIcon | IconType;
};

export const navData: LinkType[] = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: AppWindow },
  { name: "Contacts", path: "/contacts", icon: Mail },
];
