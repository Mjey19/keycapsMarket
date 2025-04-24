import { ReactNode } from "react";

export function SliderLine({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[50px] border-y border-white bg-black text-white overflow-hidden relative group">
      <div className="absolute top-0 left-0 h-full flex items-center animate-scroll whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={`item-${i}`} className="inline-flex items-center ">
            <span className="px-4 text-[26px]">{children}</span>
            {i < 9 && (
              <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
            )}
          </div>
        ))}

        {[...Array(10)].map((_, i) => (
          <div key={`duplicate-${i}`} className="inline-flex items-center">
            <span className="px-4 text-[26px]">{children}</span>
            {i < 9 && (
              <span className="w-5 h-5 bg-transparent border-2 border-white rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
