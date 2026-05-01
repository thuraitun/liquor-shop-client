import { Button, Group, Text, NumberInput } from "@mantine/core";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

type ProductDetailProps = {
  image: string;
  name: string;
  price: number;
  description: string;
};

export const ProductDetailCard = ({
  image,
  name,
  price,
  description,
}: ProductDetailProps) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-6 border border-[#e95959] rounded-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="p-4">
            <img src={image} alt={name} className="w-full object-contain" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Text fw={600} size="lg">
              {name}
            </Text>
            {/* <Text size="sm" c="dimmed">
              Item Code: 123XXXX
            </Text> */}
          </div>

          <Text fw={700} size="xl">
            {price.toLocaleString()} Ks
          </Text>

          {/* <Group>
            <Text fw={500}>Brand:</Text>
            <Text>{brand}</Text>
          </Group> */}

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
                onChange={(val) => setQty(Number(val))}
                hideControls
                className="w-20"
              />

              <Button variant="default" onClick={() => setQty((q) => q + 1)}>
                +
              </Button>
            </Group>
          </div>

          {/* ACTIONS */}
          <Group mt="md">
            <Button size="sm" rightSection={<ShoppingBag size={20} />}>
              Add To Cart
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
};
