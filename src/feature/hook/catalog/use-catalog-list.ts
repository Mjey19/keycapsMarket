import { useQuery } from "@tanstack/react-query";
import { CardInterface } from "../../../shared/types/card";
import { jsonApiInstance } from "../../../shared/lib/api-instance";
type CatalogRes = {
  name: string;
  arr: CardInterface[];
};
export const useCatalogList = () =>
  useQuery<CatalogRes[], Error>({
    queryKey: ["catalog"],
    queryFn: (meta) =>
      jsonApiInstance("/keyboard", {
        method: "GET",
        signal: meta.signal,
      }),
  });
