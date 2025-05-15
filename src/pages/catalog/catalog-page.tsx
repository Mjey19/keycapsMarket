import Catalog from "../../widgets/catalog/catalog";
import CatalogForm from "../../widgets/catalog/catalog-form";
import CatalogHeader from "../../widgets/catalog/catalog-header";

export default function CatalogPage() {
  return (
    <div className="mx-[5%] md:mx-[9%] mt-[120px] mb-10">
      <div>
        <CatalogHeader />
        <div className="flex justify-center md:justify-between items-start gap-10 mt-[90px]">
          <CatalogForm />
          <div className="flex-1">
            <Catalog />
          </div>
        </div>
      </div>
    </div>
  );
}
