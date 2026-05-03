import { ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mantine/core";
import { useEffect, useState } from "react";
import { getCart } from "../utils/cart";

export const Header = () => {
  const [count, setCount] = useState(0);

  const navLinks = [
    { href: "/", path: "Home" },
    { href: "/products", path: "Product" },
    { href: "/about-us", path: "About Us" },
  ];

  const loadCartCount = () => {
    const cart = getCart();
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    setCount(totalQty);
  };

  useEffect(() => {
    loadCartCount();

    const handleStorage = () => loadCartCount();
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-[#e95959] whitespace-nowrap"
        >
          Liquor Shop
        </Link>

        {/* NAV */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink to={link.href} className="relative px-2 py-1">
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition-colors duration-200 ${
                          isActive ? "text-[#e95959]" : "text-black"
                        }`}
                      >
                        {link.path}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#e95959] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-[#e95959]">
            {/* ICON */}
            <ShoppingBag size={26} />

            {/* BADGE */}
            {count > 0 && (
              <Badge
                size="xs"
                color="red"
                className="absolute -top-2 -right-3"
                circle
              >
                {count}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
