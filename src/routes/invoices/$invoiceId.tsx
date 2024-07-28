import { invoiceQueryOptions } from '@/utils/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

export const Route = createFileRoute('/invoices/$invoiceId')({
	params: {
		parse: (params) => ({
			invoiceId: z.number().int().parse(Number(params.invoiceId)),
		}),
		stringify: ({ invoiceId }) => ({ invoiceId: `${invoiceId}` }),
	},
	loader: (opts) => opts.context.queryClient.ensureQueryData(invoiceQueryOptions(opts.params.invoiceId)),
	component: InvoiceComponent,
});

function InvoiceComponent() {
	const params = Route.useParams();
	const invoiceQuery = useSuspenseQuery(invoiceQueryOptions(params.invoiceId));
	const invoice = invoiceQuery.data;

	return (
		<section>
			<h2>
				<strong>Invoice No.</strong> #{invoice.id.toString().padStart(2, '0')}
			</h2>
			<p>
				<strong>Invoice title:</strong> {invoice.title}
			</p>
			<p>
				<strong>Invoice body:</strong> {invoice.body}
			</p>
		</section>
	);
}
