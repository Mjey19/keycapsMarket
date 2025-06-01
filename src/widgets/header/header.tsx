import { Link } from "react-router";
import { HeaderNav } from "../../entities";
import { HeaderDrawerBtn } from "../../feature";
import Button from "../../shared/ui/button";
import { useState } from "react";
import MobileMenu from "../mobile-menu/mobile-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  if (isMobileMenuOpen)
    return <MobileMenu handleCloseMenu={setIsMobileMenuOpen} />;
  return (
    <header className="w-full h-[90px] border-b border-white ">
      <div className="h-full flex items-center justify-between mx-[5%] md:mx-[10%]">
        <Button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-8 h-6 flex flex-col justify-between lg:hidden"
        >
          <span className="block w-full h-[3px] bg-white rounded-sm"></span>
          <span className="block w-full h-[3px] bg-white rounded-sm"></span>
          <span className="block w-full h-[3px] bg-white rounded-sm"></span>
        </Button>
        <Link to={"/keycapsMarket"}>
          <img src={"/keycapsMarket/logo.svg"} alt="logo" />
        </Link>
        <HeaderNav />
        <HeaderDrawerBtn />
      </div>
    </header>
  );
}
