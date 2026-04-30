import { Controller, useForm } from "react-hook-form";
import {
  createBannerSchema,
  type CreateBannerFormData,
} from "../../../../schemas/banners/create-banner.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FileInput } from "@mantine/core";

export const BannerForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: (data: CreateBannerFormData) => void;
  onClose: () => void;
}) => {
  const form = useForm<CreateBannerFormData>({
    resolver: zodResolver(createBannerSchema),
  });
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 flex flex-col">
      <Controller
        name="image"
        control={form.control}
        rules={{ required: "Image is required" }}
        render={({ field, fieldState }) => (
          <FileInput
            label="Banner Image"
            placeholder="Upload banner image"
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Checkbox defaultChecked label="Is Active?" />

      <div className="flex justify-end gap-2 my-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};
