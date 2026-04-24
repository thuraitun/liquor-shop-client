import { Link } from "react-router-dom";

export const AdminHome = () => {
  const menus = [
    {
      path: "/admin/banner",
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
    <div className="min-h-screen w-full relative bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-7xl mx-auto my-20 relative">
        <h1 className="text-xl font-bold text-center mb-5 text-[#e95959]">
          Admin Panel
        </h1>
        <div className="grid grid-cols-4 gap-4 justify-center hover:text-[#e95959]">
          {menus.map((menu) => (
            <Link
              to={menu.path}
              key={menu.path}
              className="p-20 bg-white rounded-md shadow-md text-center border border-transparent hover:border-[#e95959]"
            >
              <span>{menu.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
