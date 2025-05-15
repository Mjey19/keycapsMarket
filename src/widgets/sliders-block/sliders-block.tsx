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
        <div className="relative w-full h-[500px] lg:h-[900px]  z-10 rounded-[10px] overflow-hidden p-5">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/games.png"
            alt="Games"
          />

          <div className="relative z-10 h-full flex flex-col justify-end">
            <div
              className="bg-background rounded-[10px] w-full h-[160px] flex flex-col items-center justify-between p-[10px]
             lg:flex-row lg:h-20 lg:justify-center lg:gap-8"
            >
              <h2
                className="text-[36px] font-bold
              lg:text-[40px]"
              >
                Игрульки
              </h2>
              <div className="lg:hidden flex gap-1">
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              </div>

              <span className="hidden lg:block w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              <PulseBtn
                className="h-[50px] w-full text-[20px]
              lg:w-80 lg:text-[24px]"
              >
                Хочу! Хочу! Хочу!
              </PulseBtn>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[500px] lg:h-[900px]  z-10 rounded-[10px] overflow-hidden p-5">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/games.png"
            alt="Games"
          />

          <div className="relative z-10 h-full flex flex-col justify-end">
            <div
              className="bg-background rounded-[10px] w-full h-[160px] flex flex-col items-center justify-between p-[10px]
             lg:flex-row lg:h-20 lg:justify-center lg:gap-8"
            >
              <h2
                className="text-[36px] font-bold
              lg:text-[40px]"
              >
                Цветастики
              </h2>
              <div className="lg:hidden flex gap-1">
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
                <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              </div>

              <span className="hidden lg:block w-5 h-5 bg-transparent border-2 border-white rounded-full" />
              <PulseBtn
                className="h-[50px] w-full text-[20px]
              lg:w-80 lg:text-[24px]"
              >
                Хочу! Хочу! Хочу!
              </PulseBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
