import { ReactNode } from "react";
import Button from "../../../shared/ui/button";

export function PulseBtn({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <Button
      className={`
relative 
w-full 
h-[85px] 
bg-[#ff4713] 
text-background 
rounded-[10px] 

font-bold 
overflow-hidden 
group
transition-colors
duration-500
${classname}
`}
    >
      <span className="relative z-10">{children}</span>

      <span
        className="
absolute 
top-1/2 
left-1/2 
w-0 
h-0 
bg-white

-translate-x-1/2 
-translate-y-1/2 
group-hover:w-[250%] 
group-hover:h-[250%] 
opacity-0
group-hover:opacity-100
blur-md
group-hover:blur-lg
transition-all 
duration-500
"
      />
    </Button>
  );
}
