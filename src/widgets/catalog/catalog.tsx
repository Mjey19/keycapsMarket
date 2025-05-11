import { useParams } from "react-router";
import { CatalogCard } from "../../entities";
import { useCatalogList } from "../../feature/hook/catalog/use-catalog-list";
import { CardInterface } from "../../shared/types/card";

export default function Catalog() {
  const { category } = useParams() as { category: string };
  const { data, isLoading } = useCatalogList(category);
  if (data === undefined && !data)
    return (
      <div className="w-full text-[32px] font-bold text-center">
        Товаров по данной категории нет
      </div>
    );
  if (isLoading) {
    return (
      <div className="w-full text-center text-[32px] font-bold ">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap gap-5">
      {data?.length &&
        data.map((item: CardInterface) => {
          return <CatalogCard key={item.id} {...item} />;
        })}
    </div>
  );
}
