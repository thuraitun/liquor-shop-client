import { useSuspenseQuery } from "@tanstack/react-query";
import { makeGetCategories } from "../../../api/categories/get-categories.api";
import { CategoryCard } from "./category-card";

export const Category = () => {
  const { data: categories } = useSuspenseQuery(makeGetCategories());
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold text-center text-[#e95959] mb-6">
        Categories
      </h1>

      <div className="grid grid-cols-2 gap-4 justify-center">
        {categories?.results?.map((category) => (
          <CategoryCard
            name={category.name}
            image={category.image_url}
            description={category.description}
            href={"/products"}
          />
        ))}
      </div>
    </div>
  );
};
