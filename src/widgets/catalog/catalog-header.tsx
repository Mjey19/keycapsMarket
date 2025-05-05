import { useState } from "react";
const options = ["Подешевле", "Подороже", "По скидке"];
export default function CatalogHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-[32px]">Клавиатуры</h2>
      <div className="relative group">
        <div className="relative w-[200px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-[50px] bg-transparent text-white text-[20px] font-medium rounded-[10px] p-3 flex items-center justify-between border border-white backdrop-blur-sm transition-all duration-200"
          >
            {selected || "Выберите..."}
            <span className="ml-2">▼</span>
          </button>

          {isOpen && (
            <ul className="absolute z-10 mt-2 w-full  backdrop-blur-sm rounded-[10px] overflow-hidden border border-white">
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
