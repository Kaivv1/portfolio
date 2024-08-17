import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const jet = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  variable: "--font-jetbrainsMono",
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${jet.variable} text-white 2xl:px-[13rem] 3xl:px-[16rem] 4xl:px-[18rem] xl:px-[10rem] pt-3 pb-16 px-3 lg:px-5 lg:pt-5 lg:pb-5 relative font-primary -z-0`}
    >
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
