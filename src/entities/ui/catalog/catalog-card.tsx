import { useNavigate } from "react-router";
import { CardInterface } from "../../../shared/types/card";

export function CatalogCard({ ...props }: CardInterface) {
  const navigate = useNavigate();
  const { price, title, id } = props;
  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="min-w-[300px] sm:w-full h-[293px] duration-200 border border-white/50 rounded-[15px] p-[15px] cursor-pointer hover:border-white "
    >
      <div className="h-40 w-full bg-gray-200"></div>
      <div className="mt-[15px] flex flex-col gap-3">
        <p className="text-[16px] h-10">{title}</p>
        <span className="text-[20px] font-medium">{price} ₽</span>
      </div>
    </div>
  );
}
