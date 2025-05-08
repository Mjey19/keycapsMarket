import { useQuery } from "@tanstack/react-query";
import { catalogPostApi } from "./api";

export function useCatalogList(category: string) {
  const { data, error, isLoading } = useQuery({
    ...catalogPostApi.getProductsCategory(category),
  });
  if (error) console.log(new Error(`get ${category} list error: ${error}`));

  return { data, isLoading };
}
