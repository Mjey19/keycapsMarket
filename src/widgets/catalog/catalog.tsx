import { CatalogCard } from "../../entities";

export default function Catalog() {
  return (
    <div className="w-full h-screen flex items-start flex-wrap justify-between">
      <CatalogCard id={1} price={8200} title="Клавиатура: Varmilo Koi V2" />
      <CatalogCard id={1} price={8200} title="Клавиатура: Varmilo Koi V2" />
      <CatalogCard id={1} price={8200} title="Клавиатура: Varmilo Koi V2" />
    </div>
  );
}
