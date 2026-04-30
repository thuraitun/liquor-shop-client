import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AdminHome = () => {
  const menus = [
    {
      path: "/admin/banners",
      name: "Banner",
    },
    {
      path: "/admin/products",
      name: "Products",
    },
    {
      path: "/admin/categories",
      name: "Categories",
    },
    {
      path: "/admin/orders",
      name: "Orders",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-xl font-bold text-center mb-5 text-[#e95959]">
        Admin Panel
      </h1>
      <div className="grid grid-cols-4 gap-4 justify-center hover:text-[#e95959]">
        {menus.map((menu) => (
          <Link
            to={menu.path}
            key={menu.path}
            className="flex items-center justify-center p-20 bg-white rounded-md shadow-md text-center border border-transparent hover:border-[#e95959]"
          >
            <span>{menu.name}</span>
            <ChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};
