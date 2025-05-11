import { FormDataType, FormItem } from "../../../shared/types/form";
import Input from "../../../shared/ui/input";
import React, { useCallback } from "react";

export const FormSection = ({
  item,
  setFormState,
}: {
  item: FormItem;
  setFormState: React.Dispatch<React.SetStateAction<FormDataType>>;
}) => {
  const onChangePriceInput = useCallback(
    (val: string, change: number, min: number, max: number) => {
      setFormState((prev) => {
        const current = { ...(prev || {}) };

        if (
          change !== undefined &&
          min <= change &&
          change <= max &&
          current[val] !== change.toString()
        ) {
          current[val] = change.toString();
        }
        return current;
      });
    },
    [setFormState]
  );

  const handleChangeCheckbox = useCallback(
    (val: string, label: string, checked: boolean) => {
      setFormState((prev) => {
        const current = { ...(prev || {}) };
        if (checked) {
          if (Array.isArray(current[val])) {
            current[val] = [...current[val], label];
          } else {
            current[val] = [label];
          }
        } else {
          if (Array.isArray(current[val])) {
            const updated = current[val].filter((l: string) => l !== label);
            if (updated.length > 0) {
              current[val] = updated;
            } else {
              delete current[val];
            }
          }
        }
        return current;
      });
    },
    [setFormState]
  );

  if (item.type === "checkbox") {
    return (
      <div>
        <p className="font-medium text-[24px]">{item.name}</p>
        <div className="flex flex-col gap-[10px] mt-[10px]">
          {item.inputs.map((inp, index) => (
            <CheckboxInput
              onChange={handleChangeCheckbox}
              val={item.val}
              key={index}
              label={inp.placeholder}
            />
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
            onChange={(e) => {
              const min = Number(e.target.min);
              const max = Number(e.target.max);
              const value = Number(e.target.value);

              if (!isNaN(value)) {
                onChangePriceInput(e.target.name, value, min, max);
              }
            }}
            key={index}
            min={200}
            max={4200}
            name={item.val[index]}
            type={item.type}
            placeholder={inp.placeholder}
            className="w-1/2 h-10 border border-white/50 bg-transparent pl-3 text-white/50 rounded-[10px]"
          />
        ))}
      </div>
    </div>
  );
};

const CheckboxInput = ({
  label,
  val,
  onChange,
}: {
  label: string;
  val: string;
  onChange: (val: string, label: string, checked: boolean) => void;
}) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      name={val}
      onChange={(e) => onChange(val, label, e.target.checked)}
      type="checkbox"
      className="appearance-none w-6 h-6 border border-white rounded-[5px] checked:bg-primary checked:border-primary cursor-pointer transition-colors duration-200"
    />
    <span className="text-white text-[20px]">{label}</span>
  </label>
);
