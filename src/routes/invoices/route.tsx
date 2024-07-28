import styles from './invoices.module.css';
import { Spinner } from '@/components/Spinner';
import { invoicesQueryOptions } from '@/utils/queryOptions';
import { Grid, Text } from '@mantine/core';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, MatchRoute, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/invoices')({
	loader: (opts) => opts.context.queryClient.ensureQueryData(invoicesQueryOptions()),
	component: InvoicesComponent,
});

function InvoicesComponent() {
	const invoicesQuery = useSuspenseQuery(invoicesQueryOptions());
	const invoices = invoicesQuery.data;
	console.log('render invoice');

	return (
		<Grid>
			<Grid.Col span={2}>
				{invoices.map((invoice) => {
					return (
						<div key={invoice.id}>
							<Link
								to="/invoices/$invoiceId"
								params={{
									invoiceId: invoice.id,
								}}
								preload="intent"
								className={styles.invoicesNav}
								activeProps={{ className: styles.activeInvoiceNav }}
							>
								<>
									<Text truncate="end">
										#{invoice.id.toString().padStart(2, '0')} - {invoice.title}
									</Text>
									<MatchRoute
										to="/invoices/$invoiceId"
										params={{
											invoiceId: invoice.id,
										}}
										pending
									>
										{(match) => <Spinner show={!!match} />}
									</MatchRoute>
								</>
							</Link>
						</div>
					);
				})}
			</Grid.Col>
			<Grid.Col span={9} offset={1}>
				<Outlet />
			</Grid.Col>
		</Grid>
	);
}
