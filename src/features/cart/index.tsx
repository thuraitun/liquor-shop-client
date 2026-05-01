import { CartItems } from "./components/cart-items";

export const Cart = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="/images/cart.svg" alt="Cart" className="w-44 h-44" />
        <div className="w-full">
          <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
            Cart
          </h1>
        </div>
      </div>

      <CartItems />
    </div>
  );
};
