import { HomeComponent } from './-components/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/home')({
  component: HomeComponent,
});
