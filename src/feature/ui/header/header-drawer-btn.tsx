import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/ui/button";
import { openDrawer } from "../../slices/drawer-slice/drawer-slice";
import { RootState } from "../../../shared/lib/store";

export function HeaderDrawerBtn() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.drawer.itemCount);
  return (
    <Button
      onClick={() => dispatch(openDrawer())}
      className="relative w-12 h-12 flex items-center justify-center rounded-[10px] hover:text-black hover:bg-primary duration-200 group"
    >
      <div className="relative">
        <span
          className={`${
            count === 0 && "hidden"
          } group-hover:bg-white duration-200 absolute top-0 -right-1 bg-primary text-black text-xs w-[25px] h-4 rounded-full flex items-center justify-center font-bold`}
        >
          {count > 99 ? "99+" : count}
        </span>
        <svg
          width="36"
          height="30"
          viewBox="0 0 36 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3444 2.50527C14.8284 1.70973 14.5466 0.689474 13.7151 0.22647C12.8836 -0.236534 11.8173 0.0330409 11.3334 0.828582L6.67615 8.48489H4.38984C3.75322 8.4755 3.12134 8.59931 2.53972 8.84851C1.95205 9.1003 1.42941 9.47425 1.01198 9.94482C0.594446 10.4155 0.29313 10.9706 0.132624 11.5696C-0.0275507 12.1674 -0.0428696 12.7918 0.0879214 13.3961L2.9259 26.7262C3.13103 27.6712 3.68243 28.5185 4.47324 29.1128C5.25827 29.7028 6.23258 30.0141 7.2284 29.9995H28.7716C29.7674 30.0141 30.7417 29.7028 31.5268 29.1128C32.3176 28.5185 32.869 27.6712 33.0741 26.7262L35.9121 13.3962C36.0429 12.7918 36.0276 12.1674 35.8674 11.5696C35.7069 10.9706 35.4056 10.4155 34.988 9.94482C34.5706 9.47425 34.0479 9.1003 33.4603 8.84851C32.8787 8.59931 32.2468 8.4755 31.6102 8.48489H29.3239L24.6666 0.828582C24.1827 0.0330408 23.1164 -0.236534 22.2849 0.22647C21.4534 0.689474 21.1717 1.70973 21.6556 2.50527L25.2929 8.48489H10.7071L14.3444 2.50527ZM13.8 15.5556C12.8059 15.5556 12 16.3017 12 17.2222V21.6667C12 22.5871 12.8059 23.3333 13.8 23.3333C14.7941 23.3333 15.6 22.5871 15.6 21.6667V17.2222C15.6 16.3017 14.7941 15.5556 13.8 15.5556ZM22.2 15.5556C21.2059 15.5556 20.4 16.3017 20.4 17.2222V21.6667C20.4 22.5871 21.2059 23.3333 22.2 23.3333C23.1941 23.3333 24 22.5871 24 21.6667V17.2222C24 16.3017 23.1941 15.5556 22.2 15.5556Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </Button>
  );
}
