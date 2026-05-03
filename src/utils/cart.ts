export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

const CART_KEY = "cart";

/** Get cart */
export const getCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/** Save cart */
export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/** Add item */
export const addToCart = (item: CartItem) => {
  const cart = getCart();

  const exist = cart.find((c) => c.id === item.id);

  if (exist) {
    exist.qty += item.qty;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

/** Update quantity */
export const updateCartQty = (id: string, qty: number) => {
  const cart = getCart().map((item) =>
    item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
  );

  saveCart(cart);
  return cart;
};

/** Remove item */
export const removeFromCart = (id: string) => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  return cart;
};

/** Clear cart */
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
