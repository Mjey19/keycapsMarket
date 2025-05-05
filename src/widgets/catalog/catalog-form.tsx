import { FormSection } from "../../entities";
import { FormItem } from "../../shared/lib/types/card/form";
import Button from "../../shared/ui/button";
const formList: FormItem[] = [
  {
    name: "Цена",
    inputs: [{ placeholder: "от 200" }, { placeholder: "до 4200" }],
    type: "number",
  },
  {
    name: "Размер набора",
    inputs: [
      { placeholder: "Маленький набор" },
      { placeholder: "На всю клавиатуру" },
    ],
    type: "checkbox",
  },
  {
    name: "Тип подключения",
    inputs: [{ placeholder: "Беспроводной" }, { placeholder: "Проводной" }],
    type: "checkbox",
  },
  {
    name: "Тип подсветки",
    inputs: [{ placeholder: "Без подсветки" }, { placeholder: "С подсветкой" }],
    type: "checkbox",
  },
];
export default function CatalogForm() {
  return (
    <form className="w-80 max-h-[1250px] flex flex-col gap-10">
      {formList.map((item, index) => (
        <FormSection key={index} item={item} />
      ))}
      <Button
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
