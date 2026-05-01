import { Button, Group, Text, NumberInput, Divider } from "@mantine/core";
import { Trash } from "lucide-react";
import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
};

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "21-SW-AA-2801 (Plywood Altar)",
    price: 1674000,
    qty: 2,
    image: "/images/product.png",
  },
];

export const CartItems = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: string, qty: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Text fw={700} size="xl" mb="lg">
        YOUR SHOPPING CART
      </Text>
      <Divider className="mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
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
                    onChange={(val) => updateQty(item.id, Number(val))}
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
                <Trash color="red" onClick={() => removeItem(item.id)} />
              </Group>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
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
