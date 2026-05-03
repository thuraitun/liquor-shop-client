import { Button } from "@mantine/core";
import { ProductCard } from "../../../components/product-card";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeGetProducts } from "../../../api/products/get-products.api";

export const LatestProduct = () => {
  const { data: latestProducts } = useQuery(
    makeGetProducts({ page: 1, limit: 6, skip: 0, is_active: true }),
  );

  return (
    <div className="py-4">
      <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
        Latest Products
      </h1>

      <Link
        to="/products"
        className="flex justify-end my-4 items-center hover:decoration-[#e95959] transition-all duration-300 cursor-pointer"
      >
        <Button variant="outline" rightSection={<ChevronsRight />} size="xs">
          See More
        </Button>
      </Link>

      <div className="grid grid-cols-5 gap-6">
        {latestProducts?.results?.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="col-span-1"
          >
            <ProductCard
              image={item.image_url}
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
