
type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
    </div>
  );
};
