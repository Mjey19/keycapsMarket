import { useQuery } from "@tanstack/react-query";
import { jsonApiInstance } from "../../../../shared/lib/api-instance";
import { useLocation } from "react-router-dom";
import { CardInterface } from "../../../../shared/types/card";

export function useCatalogFiltered(category: string) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const queryString = queryParams.toString();
  const url = queryString
    ? `/catalog?${category}&${queryString}`
    : `/catalog?${category}`;

  return useQuery({
    queryKey: ["catalog", url],
    queryFn: ({ signal }) =>
      jsonApiInstance<CardInterface[]>(url, {
        method: "GET",
        signal,
      }),
  });
}
