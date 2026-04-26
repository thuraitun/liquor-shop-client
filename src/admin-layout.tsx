import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/react-query";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full relative bg-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `radial-gradient(circle at top left,rgba(70, 130, 180, 0.5),transparent 70%)`,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};
