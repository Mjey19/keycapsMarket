import { useQuery } from "@tanstack/react-query";
import { catalogPostApi } from "./api";

export function useProduct(id: string) {
  const { data } = useQuery({ ...catalogPostApi.getProduct(id) });
 

  return { data };
}
