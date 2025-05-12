import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "../../../shared/lib/api-instance";
import {
  CardInterface,
  ProductPageInterface,
} from "../../../shared/types/card";

export const catalogPostApi = {
  baseKey: "catalog",
  getCatalogList: () => {
    return queryOptions({
      queryKey: [catalogPostApi.baseKey, "catalog"],
      queryFn: (meta) =>
        jsonApiInstance<CardInterface[]>("/catalog", {
          method: "GET",
          signal: meta.signal,
        }),
    });
  },
  getProductsCategory: (category: string) => {
    return queryOptions({
      queryKey: [catalogPostApi.baseKey, category],
      queryFn: (meta) =>
        jsonApiInstance<CardInterface[]>(`/catalog/?category=${category}`, {
          method: "GET",
          signal: meta.signal,
        }),
    });
  },
  getProduct: (id: string) => {
    return queryOptions({
      queryKey: [id],
      queryFn: (meta) =>
        jsonApiInstance<ProductPageInterface>(`/catalog/${id}`, {
          method: "GET",
          signal: meta.signal,
        }),
    });
  },
};
