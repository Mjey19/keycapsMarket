import { CardInterface } from "../../../shared/lib/types/card/card";

export function CatalogCard({ ...props }: CardInterface) {
  const { price, title } = props;
  return (
    <div className="w-[33%] h-[293px] duration-200 border border-white/50 rounded-[15px] p-[15px] cursor-pointer hover:border-white ">
      <div className="h-40 w-full bg-gray-200"></div>
      <div className="mt-[15px]">
        <p className="text-[20px] mb-[10px]">{title}</p>
        <span className="text-[20px] font-medium">{price} ₽</span>
      </div>
    </div>
  );
}
