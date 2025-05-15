import { useState } from "react";
import Button from "../../shared/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { openForm } from "../../feature/slices/form-slice/form-slice";
import { RootState } from "../../shared/lib/store";
const options = ["Подешевле", "Подороже", "По скидке"];
export default function CatalogHeader() {
  const dispatch = useDispatch();
  const isOpenForm = useSelector((state: RootState) => state.form.isOpen);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpenSelect(false);
  };
  return (
    <div className="md:flex md:items-center md:justify-between">
      <h2 className="font-bold text-[32px]">Клавиатуры</h2>
      <div className="relative flex items-center gap-5 group mt-5">
        <Button
          onClick={() => dispatch(openForm())}
          className={`${
            isOpenForm && " bg-primary border-primary"
          } duration-200 w-40 h-[50px] flex items-center justify-center font-bold gap-2 md:hidden border border-white rounded-[10px] group`}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9.49952H6.64676M2.63935 9.49952H1M2.63935 9.49952C2.63935 8.94026 2.85041 8.40391 3.22609 8.00846C3.60177 7.613 4.1113 7.39084 4.64259 7.39084C5.17389 7.39084 5.68342 7.613 6.0591 8.00846C6.43478 8.40391 6.64584 8.94026 6.64584 9.49952C6.64584 10.0588 6.43478 10.5951 6.0591 10.9906C5.68342 11.386 5.17389 11.6082 4.64259 11.6082C4.1113 11.6082 3.60177 11.386 3.22609 10.9906C2.85041 10.5951 2.63935 10.0588 2.63935 9.49952ZM18 15.8904H12.7181M12.7181 15.8904C12.7181 16.4497 12.5065 16.9867 12.1307 17.3822C11.755 17.7778 11.2453 18 10.7139 18C10.1826 18 9.67307 17.7769 9.29739 17.3814C8.9217 16.986 8.71065 16.4496 8.71065 15.8904M12.7181 15.8904C12.7181 15.331 12.5065 14.795 12.1307 14.3994C11.755 14.0039 11.2453 13.7817 10.7139 13.7817C10.1826 13.7817 9.67307 14.0038 9.29739 14.3993C8.9217 14.7947 8.71065 15.3311 8.71065 15.8904M8.71065 15.8904H1M18 3.10868H15.1468M11.1394 3.10868H1M11.1394 3.10868C11.1394 2.54942 11.3504 2.01307 11.7261 1.61762C12.1018 1.22216 12.6113 1 13.1426 1C13.4057 1 13.6662 1.05454 13.9092 1.16051C14.1522 1.26648 14.3731 1.42181 14.5591 1.61762C14.7451 1.81343 14.8927 2.04588 14.9934 2.30172C15.094 2.55756 15.1458 2.83176 15.1458 3.10868C15.1458 3.38559 15.094 3.6598 14.9934 3.91563C14.8927 4.17147 14.7451 4.40393 14.5591 4.59974C14.3731 4.79555 14.1522 4.95087 13.9092 5.05684C13.6662 5.16281 13.4057 5.21735 13.1426 5.21735C12.6113 5.21735 12.1018 4.99519 11.7261 4.59974C11.3504 4.20428 11.1394 3.66793 11.1394 3.10868Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          Фильтры
        </Button>
        <div className="relative md:w-[200px]">
          <button
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            className="w-full h-[50px] bg-transparent text-white text-[20px] font-medium rounded-[10px] p-3 flex items-center justify-between border border-white backdrop-blur-sm transition-all duration-200"
          >
            {selected || "Выберите..."}
            <span className="ml-2">▼</span>
          </button>

          {isOpenSelect && (
            <ul className="absolute z-10 mt-2 w-full bg-background backdrop-blur-sm rounded-[10px] overflow-hidden border border-white">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="text-white text-[18px] font-medium px-3 py-2 cursor-pointer hover:bg-white/40 transition"
                >
                  {option === selected ? <div>{option}</div> : option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
