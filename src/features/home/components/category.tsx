import { CategoryCard } from "./category-card";

export const Category = () => {
  const categories = [
    {
      name: "Whiskey",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      description: "Premium imported whiskey",
      href: "/products/whiskey",
    },
    {
      name: "Vodka",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      description: "Premium imported vodka",
      href: "/products/vodka",
    },
    {
      name: "Rum",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      description: "Premium imported rum",
      href: "/products/rrum",
    },
    {
      name: "Tequila",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      description: "Premium imported tequila",
      href: "/products/tequila",
    },
    {
      name: "Gin",
      image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
      description: "Premium imported gin",
      href: "/products/gin",
    },
  ];

  // const { data: categories } = useQuery(makeGetCategories());
  // console.log(categories);
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold text-center text-[#e95959] mb-6">
        Categories
      </h1>

      <div className="grid grid-cols-2 gap-4 justify-center">
        {categories.map((category) => (
          <CategoryCard
            name={category.name}
            image={category.image}
            description={category.description}
            href={category.href}
          />
        ))}
      </div>
    </div>
  );
};
