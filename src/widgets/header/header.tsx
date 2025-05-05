import { HeaderNav } from "../../entities";
import { HeaderDrawerBtn } from "../../feature";

export default function Header() {
  return (
    <header className="w-full h-[90px] border-b border-white ">
      <div className="h-full flex items-center justify-between mx-[10%]">
        <button>
          <img src={"./logo.svg"} alt="logo" />
        </button>
        <HeaderNav />
        <HeaderDrawerBtn />
      </div>
    </header>
  );
}
