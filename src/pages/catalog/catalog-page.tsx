import Catalog from "../../widgets/catalog/catalog";
import CatalogForm from "../../widgets/catalog/catalog-form";
import CatalogHeader from "../../widgets/catalog/catalog-header";

export default function CatalogPage() {
  return (
    <div className="mx-[9%] mt-[120px]">
      <div>
        <CatalogHeader />
        <div className="flex justify-between items-start gap-10 mt-[90px]">
          <CatalogForm />
          <Catalog />
        </div>
      </div>
    </div>
  );
}
