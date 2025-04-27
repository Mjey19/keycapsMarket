import { ReactNode } from "react";
import { Link } from "react-router";

export function HeaderLinkBtn({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <Link to={link}>
      <button className="w-48 h-12 duration-300 rounded-[10px] hover:bg-primary hover:text-black">
        {children}
      </button>
    </Link>
  );
}
