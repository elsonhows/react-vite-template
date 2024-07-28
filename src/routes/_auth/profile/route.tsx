import { ProfileComponent } from './-components/Profile';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/profile')({
	component: ProfileComponent,
});
