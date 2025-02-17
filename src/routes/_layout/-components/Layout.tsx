import reactLogo from '@/assets/react.svg';
import { Spinner } from '@/components/Spinner';
import { useAuth } from '@/hooks/useAuth';
import { Route } from '@/routes/__root';
import { AppShell, Burger, Button, Center, Group, Image, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Link, Outlet, useRouter, useRouterState } from '@tanstack/react-router';
import { lazy } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' });
  return <Spinner show={isLoading} />;
}

export function LayoutComponent() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const router = useRouter();
  const navigate = Route.useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      void auth.logout().then(() => {
        void router.invalidate().finally(() => {
          void navigate({ to: '/' });
        });
      });
    }
  };

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Link to="/">
                <Center>
                  <Image src={reactLogo} className="logo react" alt="React logo" pr="xs" />
                  <Text
                    size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'rgb(0,216,255)', to: 'rgb(138,117,255)', deg: 100 }}
                  >
                    {import.meta.env.APP_TITLE}
                  </Text>
                  {/* Show a global spinner when the router is transitioning */}
                  <RouterSpinner />
                </Center>
              </Link>
              <Group ml="xl" gap="sm" visibleFrom="sm">
                {auth.isAuthenticated ? (
                  <Button variant="light" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <Button variant="filled" onClick={() => void navigate({ to: '/login' })}>
                    Login
                  </Button>
                )}
              </Group>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section grow>
            {(
              [
                ['/home', 'Home'],
                ['/aside', 'Layout Aside'],
                ['/expensive', 'Expensive'],
                ['/invoices', 'Invoices'],
                ['/profile', 'Profile (Auth)'],
                ['/random', 'Random'],
              ] as const
            ).map(([to, label]) => {
              return (
                <div key={to}>
                  <NavLink
                    component={Link}
                    label={label}
                    to={to}
                    activeOptions={{
                      exact: true,
                    }}
                    preload="intent"
                  />
                </div>
              );
            })}
          </AppShell.Section>
          <AppShell.Section>
            <Text fs="italic" c="dimmed">
              ver: {import.meta.env.APP_VERSION}
            </Text>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
