import { Link } from "react-router";
import { HeaderNav } from "../../entities";
import { HeaderDrawerBtn } from "../../feature";

export default function Header() {
  return (
    <header className="w-full h-[90px] border-b border-white ">
      <div className="h-full flex items-center justify-between mx-[10%]">
        <Link to={"/"}>
          <img src={"./logo.svg"} alt="logo" />
        </Link>
        <HeaderNav />
        <HeaderDrawerBtn />
      </div>
    </header>
  );
}
