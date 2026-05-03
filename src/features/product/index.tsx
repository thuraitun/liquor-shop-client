import { Link } from "react-router-dom";
import { ProductCard } from "../../components/product-card";
import { ProductCategoriesCard } from "./components/product-categories-card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { makeGetProducts } from "../../api/products/get-products.api";

export const Product = () => {
  const { data: products } = useSuspenseQuery(makeGetProducts());
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/images/products.svg" alt="Products" className="w-44 h-44" />
        <div className="w-full">
          <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
            Products
          </h1>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="w-1/4 sticky top-0 p-6 border border-[#e95959] h-fit rounded-md">
          <h1 className="mb-5">Categories</h1>
          <ProductCategoriesCard />
        </div>
        <div className="w-3/4 ">
          <div className="grid grid-cols-4 gap-4">
            {products?.results?.map((item) => (
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
      </div>
    </div>
  );
};
