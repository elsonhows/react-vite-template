import { useAuth } from '@/hooks/useAuth';

export function ProfileComponent() {
	const auth = useAuth();

	return (
		<div>
			Username: <strong>{auth.user}</strong>
		</div>
	);
}
