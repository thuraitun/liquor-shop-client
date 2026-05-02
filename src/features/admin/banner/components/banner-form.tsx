import { Controller, useForm } from "react-hook-form";
import {
  createBannerSchema,
  type CreateBannerFormData,
} from "../../../../schemas/banners/create-banner.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FileInput, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import type { Banner } from "../../../../type/banners/type";

export const BannerForm = ({
  onSubmit,
  onClose,
  banner,
  isPending = false,
}: {
  onSubmit: (data: CreateBannerFormData) => void;
  onClose: () => void;
  banner?: Banner | null;
  isPending?: boolean;
}) => {
  const form = useForm<CreateBannerFormData>({
    resolver: zodResolver(createBannerSchema),
    defaultValues: {
      image: null,
      is_active: true,
    },
  });

  const [preview, setPreview] = useState<string | null>(null);

  const imageFile = form.watch("image");

  useEffect(() => {
    if (banner) {
      form.reset({
        image: null,
        is_active: banner.is_active,
      });

      setPreview(banner.image_url);
    } else {
      form.reset({
        image: null,
        is_active: true,
      });
      setPreview(null);
    }
  }, [banner, form]);

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
        rules={{ required: !banner ? "Image is required" : false }}
        render={({ field, fieldState }) => (
          <FileInput
            label="Banner Image"
            placeholder="Upload banner image"
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

      {/* Active Checkbox */}
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
          {banner ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};
