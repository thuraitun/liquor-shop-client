import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-white/30 backdrop-blur-md border-t border-[#e95959]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-[#e95959] mb-3">Liquor Shop</h2>
          <p className="text-sm text-gray-600">
            Premium wines, spirits, and beers delivered to your door. Enjoy
            quality drinks with the best prices in town.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#e95959]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#e95959]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#e95959]">
                About
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#e95959]">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +95 9 779 018 773
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> thuraitun84@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Liquor Shop. All rights reserved.
      </div>
    </footer>
  );
};
