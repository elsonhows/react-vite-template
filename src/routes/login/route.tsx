import { LoginComponent } from './-components/Login';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { z } from 'zod';

export const fallback = '/profile';

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
