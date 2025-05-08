import { useParams } from "react-router";
import { useProduct } from "../../feature/hook/catalog/use-product";

export default function ProductPage() {
  const { id } = useParams() as { id: string };
  const { data } = useProduct(id);
  return <div>{data?.title}</div>;
}
