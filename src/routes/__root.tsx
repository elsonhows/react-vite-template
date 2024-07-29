import type { AuthContext } from '@/utils/auth';
import { QueryClient } from '@tanstack/react-query';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
  queryClient: QueryClient;
}>()({
  component: () => <Outlet />,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/" style={{ display: 'block', padding: '0.5rem', color: 'rgb(67 56 202)' }}>
          Start Over
        </Link>
      </div>
    );
  },
});
