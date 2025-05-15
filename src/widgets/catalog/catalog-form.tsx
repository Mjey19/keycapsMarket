import { useCallback, useEffect, useState } from "react";
import { FormSection } from "../../entities";
import { FormDataType, FormItem } from "../../shared/types/form";
import Button from "../../shared/ui/button";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/lib/store";
const formList: FormItem[] = [
  {
    name: "Цена",
    inputs: [{ placeholder: "от 200" }, { placeholder: "до 4200" }],
    type: "number",
    val: ["price_gte", "price_lte"],
  },
  {
    name: "Размер набора",
    inputs: [
      { placeholder: "Маленький набор" },
      { placeholder: "На всю клавиатуру" },
    ],
    type: "checkbox",
    val: "setSize",
  },
  {
    name: "Тип подключения",
    inputs: [{ placeholder: "Беспроводной" }, { placeholder: "Проводной" }],
    type: "checkbox",
    val: "connectionType",
  },
  {
    name: "Тип подсветки",
    inputs: [{ placeholder: "Без подсветки" }, { placeholder: "С подсветкой" }],
    type: "checkbox",
    val: "lighting",
  },
];
export default function CatalogForm() {
  const { isOpen } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  console.log(isOpen);

  const [inputState, setInputState] = useState<FormDataType>({});
  const buildQueryParams = useCallback(
    (params: { [key: string]: string | string[] }) => {
      const searchParams = new URLSearchParams();

      Object.keys(params).forEach((key) => {
        const value = params[key];

        if (Array.isArray(value)) {
          value.forEach((item) => searchParams.append(key, item));
        } else {
          searchParams.set(key, value);
        }
      });
      navigate(`?${searchParams.toString()}`);
    },
    [navigate]
  );
  const handleResetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputState({});
  };
  useEffect(() => {
    buildQueryParams(inputState);
  }, [inputState, buildQueryParams]);
  return (
    <form
      className={`transition-all duration-300 
    ${isOpen ? "w-56 opacity-100" : "hidden w-0 opacity-0 "} 
    md:max-h-[1250px] flex flex-col gap-10 overflow-hidden`}
    >
      {formList.map((item, index) => (
        <FormSection setFormState={setInputState} key={index} item={item} />
      ))}
      <Button
        onClick={handleResetForm}
        className="w-full h-10 text-[20px] text-white
                  border border-white rounded-[15px] bg-transparent 
                  transition-colors duration-200 
                  hover:bg-primary hover:text-black hover:border-none"
      >
        Очистить фильтры
      </Button>
    </form>
  );
}
