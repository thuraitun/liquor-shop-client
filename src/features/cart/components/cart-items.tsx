import { Button, Group, Text, NumberInput, Divider } from "@mantine/core";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getCart,
  updateCartQty,
  removeFromCart,
  type CartItem,
} from "../../../utils/cart";
import { useNavigate } from "react-router-dom";

export const CartItems = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setItems(getCart());
  }, []);

  const updateQty = (id: string, qty: number) => {
    const updated = updateCartQty(id, qty);
    setItems(updated);
  };

  const removeItem = (id: string) => {
    const updated = removeFromCart(id);
    setItems(updated);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <Text size="lg" fw={500} mb="md">
          Your cart is empty 🛒
        </Text>
        <Button variant="outline" size="sm" onClick={() => navigate("/products")}>
          Continue Shopping →
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Text fw={700} size="xl" mb="lg">
        YOUR SHOPPING CART
      </Text>

      <Divider className="mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <Text fw={500}>{item.name}</Text>
                  <Text size="sm" c="dimmed">
                    {item.qty} x {item.price.toLocaleString()} Ks
                  </Text>
                </div>
              </div>

              <Group>
                {/* QTY */}
                <Group gap={4}>
                  <Button
                    variant="default"
                    onClick={() => updateQty(item.id, item.qty - 1)}
                  >
                    -
                  </Button>

                  <NumberInput
                    value={item.qty}
                    onChange={(val) => updateQty(item.id, Number(val) || 1)}
                    hideControls
                    className="w-16"
                  />

                  <Button
                    variant="default"
                    onClick={() => updateQty(item.id, item.qty + 1)}
                  >
                    +
                  </Button>
                </Group>

                {/* REMOVE */}
                <Trash
                  color="red"
                  className="cursor-pointer"
                  onClick={() => removeItem(item.id)}
                />
              </Group>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="bg-gray-50 p-6 rounded-md h-fit">
          <Text fw={600} size="lg" mb="md">
            Order summary
          </Text>

          <div className="flex justify-between mb-2">
            <Text c="dimmed">Subtotal</Text>
            <Text>{subtotal.toLocaleString()} Ks</Text>
          </div>

          <Divider my="sm" />

          <div className="flex justify-between mb-4">
            <Text fw={600}>Total Amount</Text>
            <Text fw={600}>{subtotal.toLocaleString()} Ks</Text>
          </div>

          <Button fullWidth size="md">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
