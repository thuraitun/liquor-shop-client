import { ProductDetailCard } from "../components/product-detail-card";

export const ProductDetail = () => {
  const product = {
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
    name: "Product",
    description: "Product description",
    price: 10000,
  };
  return (
    <div className="my-8">
      <ProductDetailCard
        image={product.image}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    </div>
  );
};
