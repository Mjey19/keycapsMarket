import { useDispatch } from "react-redux";
import { DrawerCardInterface } from "../../../shared/types/card";
import { deleteItem } from "../../../feature/slices/drawer-slice/drawer-slice";

export function DrawerCard({ ...props }: DrawerCardInterface) {
  const dispatch = useDispatch();
  const { count, price, title, id } = props;

  return (
    <div className="h-[120px] w-full flex gap-[10px]  p-[10px] bg-background border border-white rounded-[15px]">
      <div className="min-w-[100px] h-[100px] bg-slate-200 rounded-[10px]"></div>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between items-start ">
          <h2 className="inline cursor-pointer max-w-64 hover:text-primary duration-200">
            {title}
          </h2>

          <button
            onClick={() => dispatch(deleteItem(id))}
            className="text-white hover:text-primary duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 1.6C4 1.17565 4.16857 0.768687 4.46863 0.468629C4.76869 0.168571 5.17565 0 5.6 0H10.4C10.8243 0 11.2313 0.168571 11.5314 0.468629C11.8314 0.768687 12 1.17565 12 1.6V3.2H15.2C15.4122 3.2 15.6157 3.28429 15.7657 3.43431C15.9157 3.58434 16 3.78783 16 4C16 4.21217 15.9157 4.41566 15.7657 4.56569C15.6157 4.71571 15.4122 4.8 15.2 4.8H14.3448L13.6512 14.5136C13.6225 14.9173 13.4418 15.2951 13.1457 15.5709C12.8495 15.8467 12.4599 16 12.0552 16H3.944C3.53931 16 3.14965 15.8467 2.85351 15.5709C2.55736 15.2951 2.37673 14.9173 2.348 14.5136L1.656 4.8H0.8C0.587827 4.8 0.384344 4.71571 0.234315 4.56569C0.0842854 4.41566 0 4.21217 0 4C0 3.78783 0.0842854 3.58434 0.234315 3.43431C0.384344 3.28429 0.587827 3.2 0.8 3.2H4V1.6ZM5.6 3.2H10.4V1.6H5.6V3.2ZM3.2592 4.8L3.9448 14.4H12.056L12.7416 4.8H3.2592ZM6.4 6.4C6.61217 6.4 6.81566 6.48429 6.96569 6.63432C7.11571 6.78434 7.2 6.98783 7.2 7.2V12C7.2 12.2122 7.11571 12.4157 6.96569 12.5657C6.81566 12.7157 6.61217 12.8 6.4 12.8C6.18783 12.8 5.98434 12.7157 5.83431 12.5657C5.68429 12.4157 5.6 12.2122 5.6 12V7.2C5.6 6.98783 5.68429 6.78434 5.83431 6.63432C5.98434 6.48429 6.18783 6.4 6.4 6.4ZM9.6 6.4C9.81217 6.4 10.0157 6.48429 10.1657 6.63432C10.3157 6.78434 10.4 6.98783 10.4 7.2V12C10.4 12.2122 10.3157 12.4157 10.1657 12.5657C10.0157 12.7157 9.81217 12.8 9.6 12.8C9.38783 12.8 9.18434 12.7157 9.03432 12.5657C8.88429 12.4157 8.8 12.2122 8.8 12V7.2C8.8 6.98783 8.88429 6.78434 9.03432 6.63432C9.18434 6.48429 9.38783 6.4 9.6 6.4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="h-[30] w-[100px] text-[20px] rounded-[10px] border border-white flex items-center justify-between px-[10px]">
            <button className="w-5 h-full relative">
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block w-[10px] h-[2px] rounded-[2px] bg-white"></span>
            </button>
            <span>{count}</span>
            <button className="w-5 h-full relative">
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block w-[10px] h-[2px] rounded-[2px] bg-white"></span>
              <span className="absolute rotate-90 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block w-[10px] h-[2px] rounded-[2px] bg-white"></span>
            </button>
          </div>
          <span>{price} ₽</span>
        </div>
      </div>
    </div>
  );
}
