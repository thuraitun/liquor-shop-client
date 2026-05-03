import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../components/product-detail-card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { makeGetProductById } from "../../../api/products/get-product-by-id.api";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product } = useSuspenseQuery(makeGetProductById(id || ""));

  return (
    <div className="my-8">
      <ProductDetailCard
        id={product?.id}
        image={product?.image_url}
        name={product?.name}
        price={Number(product?.price)}
        description={product?.description}
      />
    </div>
  );
};
