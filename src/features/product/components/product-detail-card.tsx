import { Button, Group, Text, NumberInput } from "@mantine/core";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { addToCart } from "../../../utils/cart";

type ProductDetailProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
};

export const ProductDetailCard = ({
  id,
  image,
  name,
  price,
  description,
}: ProductDetailProps) => {
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    if (!id) return;

    addToCart({
      id,
      name,
      price,
      image,
      qty,
    });

    alert("Added to cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 border border-[#e95959] rounded-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* IMAGE */}
        <div>
          <div className="p-4">
            <img src={image} alt={name} className="w-full object-contain" />
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <div>
            <Text fw={600} size="lg">
              {name}
            </Text>
          </div>

          <Text fw={700} size="xl">
            {price?.toLocaleString()} Ks
          </Text>

          <div>
            <Text fw={500}>Description</Text>
            <Text size="sm" c="dimmed">
              {description}
            </Text>
          </div>

          {/* QUANTITY */}
          <div>
            <Text fw={500} mb={4}>
              Quantity
            </Text>

            <Group>
              <Button
                variant="default"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                -
              </Button>

              <NumberInput
                value={qty}
                onChange={(val) => setQty(Number(val) || 1)}
                hideControls
                className="w-20"
              />

              <Button variant="default" onClick={() => setQty((q) => q + 1)}>
                +
              </Button>
            </Group>
          </div>

          {/* ACTION */}
          <Group mt="md">
            <Button
              size="sm"
              rightSection={<ShoppingBag size={20} />}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
};
