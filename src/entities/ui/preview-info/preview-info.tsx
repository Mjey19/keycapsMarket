import { PulseBtn } from "../../../feature";
export function PreviewInfo() {
  return (
    <div className="flex items-center reletive">
      <div className="max-w-[680px] z-50">
        <h2 className="font-bold text-[54px]">Кастомные Кейкапы?!</h2>
        <p className="text-[25px] mt-11 mb-10">
          Да, мы создаем кастомные кейкапы <br /> форм-фактора Cherry методом
          <br />
          сублимационной печати. Так что ваши картиночки <br /> не сотрутся ^_^
        </p>
        <PulseBtn classname="text-[32px]">ХОЧУ! ХОЧУ! ХОЧУ!</PulseBtn>
      </div>
      <div className=" w-1/2  absolute top-1/3 right-0">
        <div className="w-full h-full relative">
          <img
            className="z-40 absolute -left-12 top-2/3"
            src="./layer1.png"
            alt=""
          />
          <img
            className="z-30 absolute -left-8 top-28"
            src="./layer2.png"
            alt=""
          />
          <img
            className="z-20 absolute left-24 top-10"
            src="./layer3.png"
            alt=""
          />
          <img
            className="z-10 absolute -top-16 right-20"
            src="./layer4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
