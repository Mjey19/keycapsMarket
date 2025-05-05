import { CatalogCard } from "../../entities";

export default function Catalog() {
  return (
    <div className="w-full flex items-center flex-wrap">
      <CatalogCard id={1} price={8200} title="Клавиатура: Varmilo Koi V2" />
    </div>
  );
}
