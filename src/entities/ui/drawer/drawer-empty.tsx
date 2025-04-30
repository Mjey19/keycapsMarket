import { Link } from "react-router";
import { PulseBtn } from "../../../feature";

export function DrawerEmpty() {
  return (
    <div className="w-80 flex flex-col items-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src="./blackhole.svg" alt="" />
      <p className="font-medium text-[24px] mt-5 mb-4">Тут черная дыра </p>
      <h2 className="text-[20px] mb-5">
        Добавь сюда что-нибудь, чтоб избавиться от нее
      </h2>
      <Link to={"/catalog"} className="w-full">
        <PulseBtn classname="h-[60px] w-72 text-[24px]">
          Перейти к выбору
        </PulseBtn>
      </Link>
    </div>
  );
}
