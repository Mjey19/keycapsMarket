import { PulseBtn } from "../../feature";

export default function SlidersBlock() {
  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="absolute left-0 top-0 w-full h-full grid grid-cols-9 grid-rows-20 z-0">
        {Array.from({ length: 63 }).map((_, index) => (
          <div key={index} className="border border-white/25" />
        ))}
      </div>
      <div className="w-[80%] mx-[10%] flex flex-col gap-24">
        <div className="relative w-full h-[900px]  z-10 rounded-[10px] overflow-hidden p-5">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/games.png"
            alt="Games"
          />

          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="bg-background rounded-[10px] w-[600px] h-20 flex items-center justify-center p-[10px] gap-3">
              <h2 className="text-[40px] font-bold">Игрульки</h2>
              <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              <PulseBtn classname="h-full w-80 text-[24px]">
                Хочу! Хочу! Хочу!
              </PulseBtn>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[900px]  z-10 rounded-[10px] overflow-hidden p-5">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/games.png"
            alt="Games"
          />

          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="bg-background rounded-[10px] w-[600px]  h-20 flex items-center justify-center gap-3 p-[10px] ">
              <h2 className="text-[40px] font-bold">Цветастики</h2>
              <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              <PulseBtn classname="h-full w-80 text-[24px]">
                Хочу! Хочу! Хочу!
              </PulseBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
