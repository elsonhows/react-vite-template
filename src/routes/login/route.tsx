import { useAuth } from '@/hooks/useAuth';
import { sleep } from '@/utils/common';
import { Button, Fieldset, Grid, Space, Stack, Text, TextInput } from '@mantine/core';
import { createFileRoute, redirect, useRouter, useRouterState } from '@tanstack/react-router';
import * as React from 'react';
import { z } from 'zod';

const fallback = '/profile' as const;

export const Route = createFileRoute('/login')({
	validateSearch: z.object({
		redirect: z.string().optional().catch(''),
	}),
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: search.redirect || fallback });
		}
	},
	component: LoginComponent,
});

function LoginComponent() {
	const auth = useAuth();
	const router = useRouter();
	const isLoading = useRouterState({ select: (s) => s.isLoading });
	const navigate = Route.useNavigate();
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const search = Route.useSearch();

	const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		setIsSubmitting(true);
		try {
			evt.preventDefault();
			const data = new FormData(evt.currentTarget);
			const fieldValue = data.get('username');

			if (!fieldValue) return;
			const username = fieldValue.toString();
			await auth.login(username);

			await router.invalidate();

			// This is just a hack being used to wait for the auth state to update
			// in a real app, you'd want to use a more robust solution
			await sleep(1);

			await navigate({ to: search.redirect || fallback });
		} catch (error) {
			console.error('Error logging in: ', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const isLoggingIn = isLoading || isSubmitting;

	return (
		<Grid>
			<Grid.Col span={3}>
				<h3>Login page</h3>
				{search.redirect ? (
					<Text c="red.5">You need to login to access this page.</Text>
				) : (
					<Text>Login to see all the cool content in here.</Text>
				)}

				<Space h="md" />

				<form onSubmit={onFormSubmit}>
					<Fieldset disabled={isLoggingIn}>
						<Stack gap="sm">
							<TextInput label="Username" placeholder="Enter your name" name="username" required />
							<Button type="submit">{isLoggingIn ? 'Loading...' : 'Login'}</Button>
						</Stack>
					</Fieldset>
				</form>
			</Grid.Col>
		</Grid>
	);
}
