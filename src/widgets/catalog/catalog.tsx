import { CatalogHeader } from "../../entities";

export default function Catalog() {
  return (
    <div>
      <CatalogHeader />
      <div className="flex justify-between  gap-10 mt-[90px]">
        <form className="w-80 max-h-[1250px] " action=""></form>
        <div className="w-full flex items-center flex-wrap">
          <div className="w-80 h-[293px] duration-200 border border-white/50 rounded-[15px] p-[15px] cursor-pointer hover:border-white ">
            <div className="h-40 w-full bg-gray-200"></div>
            <div className="mt-[15px]">
              <p className="text-[20px] mb-[10px]">
                Клавиатура: Varmilo Koi V2
              </p>
              <span className="text-[20px] font-medium">8 200 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
