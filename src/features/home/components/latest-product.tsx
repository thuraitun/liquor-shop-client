import { Button } from "@mantine/core";
import { ProductCard } from "../../../components/product-card";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

export const LatestProduct = () => {
  const product = [
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product 2flkdsafjldsafj  akfjaldfjdsa",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product 3flkdsafjldsafj ldsakfjdss akfjaldfjdsa dlfalkfdjasdlfk",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product 4flkdsafjdsa",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product ldsakfjdss akfjaldfjdsa",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product",
      price: "$100.00",
    },
    {
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      name: "Product",
      price: "$100.00",
    },
  ];
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
        {product.map((item) => (
          <Link
            to={`/products/${item.name}`}
            key={item.name}
            className="col-span-1"
          >
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
