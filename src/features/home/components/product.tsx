import { ProductCard } from "../../../components/product-card";

export const Product = () => {
  const product = {
    image: "https://picsum.photos/200/300",
    name: "Product 1",
    price: "$100.00",
  };
  return (
    <div className="py-4">
      <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
        Latest Products
      </h1>

      <div className="grid grid-cols-4 gap-2">
        <ProductCard
          image={product.image}
          name="/images/about.svg"
          price={product.price}
        />
        <ProductCard
          image={product.image}
          name="/images/about.svg"
          price={product.price}
        />
        <ProductCard
          image={product.image}
          name="/images/about.svg"
          price={product.price}
        />
        <ProductCard
          image={product.image}
          name="/images/about.svg"
          price={product.price}
        />
      </div>
    </div>
  );
};
