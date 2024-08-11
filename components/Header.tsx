import Logo from "./Logo";
import Socials from "./Socials";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <Logo />
      <div className="flex items-center gap-3 z-10">
        <Socials />
        <Button size="sm">Something</Button>
      </div>
    </header>
  );
};

export default Header;
