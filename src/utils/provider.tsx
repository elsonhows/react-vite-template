import { Spinner } from '@/components/Spinner';
import { useAuth } from '@/hooks/useAuth';
import { routeTree } from '@/routeTree.gen';
import { AuthProvider } from '@/utils/auth';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorComponent, RouterProvider, createRouter } from '@tanstack/react-router';

// TODO: potential shift to other file?
const theme = createTheme({
	/** Your theme override here */
});

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPendingComponent: () => (
		<div>
			<Spinner />
		</div>
	),
	defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
	context: {
		auth: undefined!, // This will be set after we wrap the app in an AuthProvider
		queryClient,
	},
	defaultPreload: 'intent',
	// Since we're using React Query, we don't want loader calls to ever be stale
	// This will ensure that the loader is always called when the route is preloaded or visited
	defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

function InnerApp() {
	const auth = useAuth();
	return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
	return (
		<AuthProvider>
			<InnerApp />
		</AuthProvider>
	);
}

export default function RootProvider() {
	return (
		<MantineProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</MantineProvider>
	);
}
