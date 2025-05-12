import Button from "../../../shared/ui/button";

export function PulseBtn({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      {...props}
      className={`
relative 
w-full  
bg-[#ff4713] 
text-background 
rounded-[10px] 

font-bold 
overflow-hidden 
group
transition-colors
duration-500
${props.className}
`}
    >
      <span className="relative z-10">{props.children}</span>

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
