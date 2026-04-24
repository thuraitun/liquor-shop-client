import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  name: string;
  image: string;
  href: string;
  description?: string;
};

export const CategoryCard = ({
  name,
  image,
  href,
  description,
}: CategoryCardProps) => {
  return (
    <div className="flex items-center justify-between border border-transparent hover:border-[#e95959] bg-[#f3f4f6] transition-all  p-4">
      <div className="flex items-center gap-4 w-full">
        <div className="gap-2 flex flex-col w-full">
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}

          <Link
            to={href}
            className="text-sm text-[#e95959] font-medium hover:underline"
          >
            <Button color="red">Shop now →</Button>
          </Link>
        </div>
        <img src={image} alt={name} className="w-32 h-32 object-contain" />
      </div>
    </div>
  );
};
