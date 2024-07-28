import { Route } from '../$invoiceId';
import { invoiceQueryOptions } from '@/utils/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';

export function InvoiceComponent() {
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
