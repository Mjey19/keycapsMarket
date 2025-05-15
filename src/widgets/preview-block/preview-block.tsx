import { PreviewInfo, SliderLine } from "../../entities";

export default function PreviewBlock() {
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <div className="flex-1 mt-8 sm:mt-20 lg:mt-[189px] mx-[10%] reletive">
        <PreviewInfo />
        <div
          className="absolute right-52 top-1/2 -translate-y-1/2 w-[800px] h-[150px] pointer-events-none
             bg-gradient-to-l from-white/50 to-white/0 blur-[80px] opacity-60 rounded-full z-0"
        />
      </div>
      <SliderLine>
        Там ниже категории, посмотри если еще не уверен в покупке.
      </SliderLine>
    </div>
  );
}
