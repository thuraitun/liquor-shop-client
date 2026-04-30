import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/react-query";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Anchor, Breadcrumbs } from "@mantine/core";

const routeConfig: Record<string, string> = {
  admin: "Admin",
  banners: "Banners",
  users: "Users",
};

const formatLabel = (segment: string) =>
  segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const AdminLayout = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const items = paths.map((segment, index) => {
    const to = "/" + paths.slice(0, index + 1).join("/");
    const isLast = index === paths.length - 1;

    const label = routeConfig[segment] || formatLabel(segment);

    return isLast ? (
      <span key={to}>{label}</span>
    ) : (
      <Anchor component={Link} to={to} key={to}>
        {label}
      </Anchor>
    );
  });

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
          <div className="my-5 text-sm">
            {location.pathname !== "/admin" &&
              location.pathname !== "/admin/" && (
                <Breadcrumbs>{items}</Breadcrumbs>
              )}
          </div>
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};
