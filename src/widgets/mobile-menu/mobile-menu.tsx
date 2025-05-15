import { Link } from "react-router";
import Button from "../../shared/ui/button";

export default function MobileMenu({
  handleCloseMenu,
}: {
  handleCloseMenu: (value: boolean) => void;
}) {
  return (
    <div className="z-50 flex flex-col justify-between w-full h-full bg-[#5C5C5C] fixed top-0 left-0">
      <div className="w-full p-7">
        <div className="flex justify-end w-full">
          <Button
            onClick={() => handleCloseMenu(false)}
            className=" w-8 h-8 relative mb-12 
          transition-colors  group"
          >
            <span className="group-hover:bg-primary duration-200 block absolute top-1/2 left-1/2 w-1 h-8 bg-white rounded-sm rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
            <span className="group-hover:bg-primary duration-200 block absolute top-1/2 left-1/2 w-1 h-8 bg-white rounded-sm -rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
          </Button>
        </div>
        <ul className=" text-[20px] text-white flex flex-col gap-12">
          <li onClick={() => handleCloseMenu(false)}>
            <Link to={"/catalog/keyboards"}>Клавиатуры</Link>
          </li>
          <li onClick={() => handleCloseMenu(false)}>
            <Link to={"/catalog/keycaps"}>Кейкапы</Link>
          </li>
          <li onClick={() => handleCloseMenu(false)}>
            <Link to={"/about"}>О нас</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-24 border-b border-white">
        <img src="/grass.svg" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
