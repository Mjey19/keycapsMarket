import { useNavigate, useParams } from "react-router";
import { useProduct } from "../../feature/hook/catalog/use-product";

import { PulseBtn } from "../../feature";
import { SliderLine } from "../../entities";
import { useDispatch } from "react-redux";
import { addItem } from "../../feature/slices/drawer-slice/drawer-slice";
import Button from "../../shared/ui/button";

export default function ProductPage() {
  const { id } = useParams() as { id: string };
  const { data, isLoading, error } = useProduct(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (error)
    return (
      <div className="w-full text-center text-[32px]">
        <p className="text-[32px]">Не удалось найти продукт...</p>
        <PulseBtn
          onClick={() => navigate("/catalog")}
          className="h-16 w-64 text-[24px]"
        >
          Обратно к каталогу
        </PulseBtn>
      </div>
    );
  if (isLoading)
    return (
      <div className=" w-full text-center text-[32px]">Loading Product...</div>
    );
  return (
    <div className="w-full mt-[90px]">
      <div className="mx-[10%] flex justify-between items-start mb-10">
        <div className="w-[800px] h-[634px] bg-slate-100"></div>
        <div className="w-[560px]">
          <p className="font-bold text-[32px] text-white mb-9">{data?.title}</p>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[24px] font-medium">О клавиатуре</p>
              <Button
                className="w-80 text-[16px] text-white border border-white rounded-[5px] bg-transparent
              hover:bg-primary hover:text-black hover:border-transparent duration-200 
              "
              >
                Перейти к описанию
              </Button>
            </div>
            <div className="flex flex-col gap-[10px] mt-6">
              <div className="w-full h-9 border-b border-white flex items-start justify-between text-[20px] pr-32">
                <p className="text-white/50">Профиль кейкапов</p>
                <span>Cherry</span>
              </div>
              <div className="w-full h-9 border-b border-white flex items-start justify-between text-[20px] pr-32">
                <p className="text-white/50">Количество клавиш</p>
                <span>80%</span>
              </div>
              <div className="w-full h-9 border-b border-white flex items-start justify-between text-[20px] pr-32">
                <p className="text-white/50">Тип раскладки</p>
                <span>ANSI</span>
              </div>
              <div className="w-full h-9 border-b border-white flex items-start justify-between text-[20px] pr-32">
                <p className="text-white/50">Тип подсветки</p>
                <span>Без подсветки</span>
              </div>
              <div className="w-full h-9 border-b border-white flex items-start justify-between text-[20px] pr-32">
                <p className="text-white/50">Тип подключения</p>
                <span>Проводной</span>
              </div>
            </div>
            <div className="w-full mt-10">
              <h2 className="text-[32px] mb-4">Итого: 8 200 ₽</h2>
              <PulseBtn
                onClick={() => dispatch(addItem(data))}
                className="h-[60px] text-[24px] font-bold"
              >
                Добавить в корзину
              </PulseBtn>
            </div>
          </div>
        </div>
      </div>
      <SliderLine>Там ниже описание, посмотри пожалуйста.</SliderLine>
    </div>
  );
}
