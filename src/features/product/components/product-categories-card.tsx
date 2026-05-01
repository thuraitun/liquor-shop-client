import { Checkbox } from "@mantine/core";

export const ProductCategoriesCard = () => {
  const categories = [
    {
      id: "0",
      name: "All",
    },
    {
      id: "1",
      name: "Wine",
    },
    {
      id: "2",
      name: "Red",
    },
    {
      id: "3",
      name: "White",
    },
    {
      id: "4",
      name: "Rose",
    },
    {
      id: "5",
      name: "Sparkling",
    },
    {
      id: "5",
      name: "Dessert",
    },
  ];
  return (
    <div className="">
      {categories.map((category) => (
        <div key={category.id} className="mb-4">
          <Checkbox label={category.name} />
        </div>
      ))}
    </div>
  );
};
