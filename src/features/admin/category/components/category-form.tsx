import { Controller, useForm } from "react-hook-form";
import {
  createCategorySchema,
  type CreateCategoryFormData,
} from "../../../../schemas/categories/create-category.schema";
import type { Category } from "../../../../type/categories/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FileInput,
  Image,
  Textarea,
  TextInput,
} from "@mantine/core";

export const CategoryForm = ({
  onSubmit,
  onClose,
  category,
  isPending = false,
}: {
  onSubmit: (data: CreateCategoryFormData) => void;
  onClose: () => void;
  category?: Category | null;
  isPending?: boolean;
}) => {
  const form = useForm<CreateCategoryFormData>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      image: null,
      name: null,
      description: null,
      is_active: true,
    },
  });

  console.log(form.formState.errors);

  const [preview, setPreview] = useState<string | null>(null);

  const imageFile = form.watch("image");

  useEffect(() => {
    if (category) {
      form.reset({
        image: null,
        description: category.description,
        name: category.name,
        is_active: category.is_active,
      });

      setPreview(category.image_url);
    } else {
      form.reset({
        image: null,
        name: null,
        description: null,
        is_active: true,
      });
      setPreview(null);
    }
  }, [category, form]);

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
        rules={{ required: !category ? "Image is required" : false }}
        render={({ field, fieldState }) => (
          <FileInput
            label="Category Image"
            placeholder="Upload category image"
            accept="image/*"
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
        label="Category Name"
        placeholder="Enter category name"
        {...form.register("name")}
        error={form.formState.errors.name?.message}
      />

      <Controller
        name="description"
        control={form.control}
        rules={{ required: "Description is required" }}
        render={({ field, fieldState }) => (
          <Textarea
            label="Description"
            placeholder="Enter description"
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
          {category ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};
