import Expensive from './-components/Expensive';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/expensive/')({
  component: Expensive,
});
