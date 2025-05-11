export interface FormItem {
  name: string;
  inputs: { placeholder: string; name?: string }[];
  type: "number" | "checkbox";
  val: string | string[];
}
export type FormDataType = {
  priceFrom: string;
  priceTo: string;
  setSize: string[];
  connectionType: string[];
  lighting: string[];
  [key: string]: string | string[];
};
