type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="w-[220px] h-[300px] flex flex-col shadow-md p-3 rounded-sm border border-transparent hover:border-[#e95959] transition-all duration-300">
      <div className="w-full h-[180px] overflow-hidden rounded-sm">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-3">
        <p className="text-sm font-medium line-clamp-2">{name}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-[#e95959] font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};
