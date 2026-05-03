import { Controller, useForm } from "react-hook-form";
import {
  createProductSchema,
  type CreateProductFormData,
} from "../../../../schemas/products/create-product.schema";
import type { Product } from "../../../../type/products/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FileInput,
  Image,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { makeGetCategories } from "../../../../api/categories/get-categories.api";

export const ProductForm = ({
  onSubmit,
  onClose,
  product,
  isPending = false,
}: {
  onSubmit: (data: CreateProductFormData) => void;
  onClose: () => void;
  product?: Product | null;
  isPending?: boolean;
}) => {
  const form = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      image: null,
      name: null,
      price: null,
      category_id: null,
      description: null,
      is_active: true,
    },
  });

  const { data: categories, isLoading } = useQuery(makeGetCategories());

  const categoryOpts =
    categories?.results?.map((item) => ({
      label: item.name,
      value: item.id,
    })) || [];

  const [preview, setPreview] = useState<string | null>(null);

  const imageFile = form.watch("image");

  useEffect(() => {
    if (product) {
      form.reset({
        image: null,
        description: product.description,
        name: product.name,
        price: product.price,
        category_id: product.category_id,
        is_active: product.is_active,
      });

      setPreview(product.image_url);
    } else {
      form.reset({
        image: null,
        name: null,
        description: null,
        is_active: true,
      });
      setPreview(null);
    }
  }, [product, form]);

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="gap-4 flex flex-col"
    >
      {/* Image Upload */}
      <Controller
        name="image"
        control={form.control}
        rules={{ required: !product ? "Image is required" : false }}
        render={({ field, fieldState }) => (
          <FileInput
            label="Product Image"
            placeholder="Upload product image"
            accept="image/*"
            withAsterisk
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      {/* Image Preview */}
      {preview && (
        <Image src={preview} alt="Preview" radius="md" h={150} fit="contain" />
      )}

      <TextInput
        label="Product Name"
        placeholder="Enter product name"
        withAsterisk
        {...form.register("name")}
        error={form.formState.errors.name?.message}
      />

      <Controller
        name="category_id"
        control={form.control}
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <Select
            label="Category"
            placeholder="Select product category"
            data={categoryOpts}
            withAsterisk
            searchable
            loading={isLoading}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="price"
        control={form.control}
        rules={{ required: "Price is required" }}
        render={({ field, fieldState }) => (
          <TextInput
            label="Price"
            type="number"
            placeholder="Enter product price"
            withAsterisk
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={form.control}
        rules={{ required: "Description is required" }}
        render={({ field, fieldState }) => (
          <Textarea
            label="Description"
            placeholder="Enter product description"
            onChange={field.onChange}
            value={field.value}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="is_active"
        control={form.control}
        render={({ field }) => (
          <Checkbox
            label="Is Active?"
            checked={field.value}
            onChange={(event) => field.onChange(event.currentTarget.checked)}
          />
        )}
      />

      {/* Actions */}
      <div className="flex justify-end gap-2 my-4">
        <Button variant="outline" onClick={onClose} disabled={isPending}>
          Cancel
        </Button>
        <Button type="submit" loading={isPending}>
          {product ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};
