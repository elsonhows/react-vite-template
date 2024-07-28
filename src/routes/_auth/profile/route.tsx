import { useAuth } from '@/hooks/useAuth';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/profile')({
	component: ProfileComponent,
});

function ProfileComponent() {
	const auth = useAuth();

	return (
		<div>
			Username: <strong>{auth.user}</strong>
		</div>
	);
}
