import { FormItem } from "../../../shared/lib/types/card/form";
import Input from "../../../shared/ui/input";

export const FormSection = ({ item }: { item: FormItem }) => {
  if (item.type === "checkbox") {
    return (
      <div>
        <p className="font-medium text-[24px]">{item.name}</p>
        <div className="flex flex-col gap-[10px] mt-[10px]">
          {item.inputs.map((inp, index) => (
            <CheckboxInput key={index} label={inp.placeholder} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-medium text-[24px]">{item.name}</p>
      <div className="flex justify-between items-center gap-[10px] mt-[10px]">
        {item.inputs.map((inp, index) => (
          <Input
            key={index}
            min={200}
            max={4200}
            type={item.type}
            placeholder={inp.placeholder}
            className="w-1/2 h-10 border border-white/50 bg-transparent pl-3 text-white/50 rounded-[10px]"
          />
        ))}
      </div>
    </div>
  );
};

const CheckboxInput = ({ label }: { label: string }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      className="appearance-none w-6 h-6 border border-white rounded-[5px] checked:bg-primary checked:border-primary cursor-pointer transition-colors duration-200"
    />
    <span className="text-white text-[20px]">{label}</span>
  </label>
);
