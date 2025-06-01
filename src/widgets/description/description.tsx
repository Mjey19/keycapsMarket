import { SliderLine } from "../../entities";

export default function Description() {
  return (
    <div
      className="h-[550px] w-full flex flex-col justify-between
    sm:h-[872px]"
    >
      <SliderLine>Снизу можно потрогать траву и почитать о нас</SliderLine>
      <div className="h-full w-full flex justify-center relative">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[800px] h-[150px] pointer-events-none
                    bg-gradient-to-l from-white/50 to-white/0 blur-[80px] opacity-60 
                    rounded-full z-0"
        />
        <div
          className="mt-16 flex flex-col items-center text-center text-[16px] max-w-[920px]
        sm:text-[24px]"
        >
          <img className="w-80 sm:max-w-[440px] mb-12" src="./keyboard.svg" alt="" />
          <p>
            Мы — команда прогеров и геймеров, которые задолбались искать
            нормальные кейкапы с любимыми принтами.
          </p>
          <p className="my-6">
            Поэтому мы решили: раз никто не делает — сделаем сами.
          </p>
          <p>
            Так и родился наш бренд. Именно мы создадим те арты, которые вам
            понравятся.
          </p>
        </div>
      </div>
      <div className="w-full h-24 border-b border-white">
        <img src="grass.svg" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
