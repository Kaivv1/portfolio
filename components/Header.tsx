import { Download } from "lucide-react";
import Logo from "./Logo";
import Socials from "./Socials";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between flex-col sm:flex-row gap-4 items-center mb-10 sm:mb-16 lg:mb-24 xl:mb-28">
      <Logo />
      <div className="flex items-center gap-3 z-10">
        <Socials />
        <Button size="sm" className="uppercase gap-1 text-xs md:text-sm">
          Download CV <Download className="size-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
