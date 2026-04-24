import { Input } from "@mantine/core";
import { ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const navLinks = [
    {
      href: "/",
      path: "Home",
    },
    {
      href: "/products",
      path: "Product",
    },
    {
      href: "/about-us",
      path: "About Us",
    },
  ];
  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#e95959] whitespace-nowrap">
          Liquor Shop
        </Link>

        {/* Nav Links */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink to={link.href} className="relative px-2 py-1">
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition-colors duration-200 ${isActive ? "text-[#e95959]" : "text-black"}`}
                      >
                        {link.path}
                      </span>

                      {/* animated bar */}
                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#e95959] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Input placeholder="Search Product" className="w-48" />

          <Link to="/cart" className="text-[#e95959]">
            <ShoppingBag />
          </Link>
        </div>
      </div>
    </div>
  );
};
