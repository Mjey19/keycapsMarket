import { useQuery } from "@tanstack/react-query";
import { CardInterface } from "../../../../shared/types/card";
import { jsonApiInstance } from "../../../../shared/lib/api-instance";

export function useCatalogFiltered(
  queryParams: Record<string, string>,
  category: string
) {
  const queryString = new URLSearchParams(queryParams).toString();

  const url = queryString
    ? `/catalog?${category}&${queryString}`
    : `/catalog?${category}`;
  console.log(url);

  return useQuery({
    queryKey: ["catalog", queryString],
    queryFn: ({ signal }) =>
      jsonApiInstance<CardInterface[]>(url, {
        method: "GET",
        signal,
      }),
  });
}
