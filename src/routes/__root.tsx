import "../index.css";
import "../App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => {
    const queryClient = new QueryClient();

    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/env" className="[&.active]:font-bold">
            Env
          </Link>{" "}
          <Link to="/query" className="[&.active]:font-bold">
            Query
          </Link>
        </div>
        <hr />
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
