export interface FormItem {
  name: string;
  inputs: { placeholder: string; name?: string }[]; 
  type: "number" | "checkbox";
}
export type FormDataType = {
  priceFrom: string;
  priceTo: string;
  setSize: string[];
  connectionType: string[];
  lighting: string[];
};
