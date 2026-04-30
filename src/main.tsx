import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { theme } from "./utils/theme.ts";
import { Notifications } from "@mantine/notifications";


createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <Notifications position="top-right" />
    <RouterProvider router={router} />
  </MantineProvider>,
);
