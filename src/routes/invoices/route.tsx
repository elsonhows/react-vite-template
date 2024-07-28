import { InvoicesComponent } from './-components/Invoices';
import { invoicesQueryOptions } from '@/utils/queryOptions';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/invoices')({
	loader: (opts) => opts.context.queryClient.ensureQueryData(invoicesQueryOptions()),
	component: InvoicesComponent,
});
