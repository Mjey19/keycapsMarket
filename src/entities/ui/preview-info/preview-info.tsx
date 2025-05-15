import { PulseBtn } from "../../../feature";
export function PreviewInfo() {
  return (
    <div className=" md:flex md:items-center reletive">
      <div className="max-w-[680px] z-50">
        <h2 className="font-bold text-[54px]">Кастомные Кейкапы?!</h2>
        <p className="textp-[20px] text-[20px] sm:text-[25px] mt-11 mb-10">
          Да, мы создаем кастомные кейкапы <br /> форм-фактора Cherry методом
          <br />
          сублимационной печати. Так что ваши картиночки <br /> не сотрутся ^_^
        </p>
        <PulseBtn className="text-[20px] sm:text-[32px] w-full h-[60px] sm:h-[85px]">
          ХОЧУ! ХОЧУ! ХОЧУ!
        </PulseBtn>
      </div>
      <div className="w-full h-[500px] block mt-20 md:w-1/2   md:absolute md:top-1/3 md:right-0">
        <div className="w-full h-full relative">
          <img
            className="z-40 absolute -left-12 top-6 object-cover"
            src="/layer1.png"
            alt=""
          />
          <img
            className="z-30 absolute -left-8 top-40 object-cover"
            src="/layer2.png"
            alt=""
          />
          <img
            className="z-20 absolute left-24 top-0 object-cover"
            src="/layer3.png"
            alt=""
          />
          <img
            className="z-10 absolute -top-16 right-8 object-cover"
            src="/layer4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
