import { useParams } from "react-router";
import { CatalogCard } from "../../entities";
import { CardInterface } from "../../shared/types/card";
import { useCatalogFiltered } from "../../feature/hook/filter/util/use-catalog-filtered";

export default function Catalog() {
  const { category } = useParams() as { category: string };
  const { data, isLoading } = useCatalogFiltered(category);

  if (isLoading) {
    return (
      <div className="w-full text-center text-[32px] font-bold ">
        Loading...
      </div>
    );
  }
  if (data === undefined && !data)
    return (
      <div className="sm:w-full text-[32px] font-bold text-center">
        Товаров по данной категории нет
      </div>
    );

  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.length &&
        data.map((item: CardInterface) => {
          return <CatalogCard key={item.id} {...item} />;
        })}
    </div>
  );
}
