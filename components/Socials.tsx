import { Linkedin } from "lucide-react";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

const Socials = () => {
  return (
    <div className="flex space-x-3">
      <Link href="https://www.linkedin.com/in/kaloyan-vulchev">
        <Linkedin className="social-icon overflow-visible" />
      </Link>
      <Link href="https://github.com/Kaivv1">
        <LuGithub className="social-icon" />
      </Link>
    </div>
  );
};

export default Socials;
