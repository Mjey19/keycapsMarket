import { useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../../../shared/lib/store";

export function DrawerInfo() {
  const { totalPrice } = useSelector((state: RootState) => state.drawer);
  return (
    <div className="w-full h-[300px] bg-background rounded-[15px] border border-white">
      <div className="border-b border-white w-full h-14 flex items-center justify-between px-4 text-[20px] font-medium">
        <p>Итого:</p>
        <span>{totalPrice} ₽</span>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[24px]">Перейти к оформлению заказа на:</h2>
          <div className="flex flex-col gap-[10px]">
            <button className="w-full h-[60px] bg-[#335BFB] rounded-[15px] flex items-center justify-center">
              <img src="ozon.svg" alt="" />
            </button>
            <button className="w-full h-[60px] bg-primary rounded-[15px] flex items-center justify-center">
              <img src="ali.svg" alt="" />
            </button>
          </div>
        </div>
        <Link to={"/keycapsMarket"}>
          <p className="text-[16px]">Почему заказ нельзя оформить здесь?</p>
        </Link>
      </div>
    </div>
  );
}
