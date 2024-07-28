import { RootComponent } from './_layout/-components/Root';
import styles from '@/routes/_layout/-components/Root.module.css';
import type { AuthContext } from '@/utils/auth';
import { QueryClient } from '@tanstack/react-query';
import { Link, createRootRouteWithContext } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/" className={styles.link}>
          Start Over
        </Link>
      </div>
    );
  },
});
