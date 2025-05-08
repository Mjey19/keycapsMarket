import { ReactNode } from "react";
import { useNavigate } from "react-router";
import Button from "../../../shared/ui/button";

export function HeaderLinkBtn({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(`/catalog/${link}`)}
      className="w-48 h-12 duration-300 rounded-[10px] hover:bg-primary hover:text-black"
    >
      {children}
    </Button>
  );
}
