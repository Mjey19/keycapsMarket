import { CatalogCard } from "../../entities";
import { useCatalogList } from "../../feature/hook/catalog/use-catalog-list";
import { CardInterface } from "../../shared/types/card";

export default function Catalog() {
  const { data, error } = useCatalogList();

  if (error) return <div>Ошибка...</div>;

  return (
    <div className="w-full flex flex-wrap gap-5">
      {data?.length &&
        data[0].arr.map((item: CardInterface) => {
          return (
            <CatalogCard
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
            />
          );
        })}
    </div>
  );
}
