import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createBanner } from "./api/create-banner.api";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createBannerSchema,
  type CreateBannerFormData,
} from "./schemas/create-banner.schema";
import { Button, FileInput } from "@mantine/core";
export const AdminBanner = () => {
  const queryClient = useQueryClient();

  const form = useForm<CreateBannerFormData>({
    resolver: zodResolver(createBannerSchema),
  });

  const createMutation = useMutation({
    mutationFn: createBanner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      //   toast.success({ message: "Banner added successfully" });
      console.log("Banner added successfully");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        // toast.error({ message: error.response?.data.message });
        console.log(error.response?.data.message);
      } else {
        // toast.error({ message: error.message });
        console.log(error.message);
      }
    },
  });

  const handleSubmit = form.handleSubmit((data) => createMutation.mutate(data));
  return (
    <div>
      <h1>Admin Banner</h1>

      <form onSubmit={handleSubmit}>
        <Controller
          name="image_url"
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
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
