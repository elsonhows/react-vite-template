import styles from './Invoices.module.css';
import { Spinner } from '@/components/Spinner';
import { invoicesQueryOptions } from '@/utils/queryOptions';
import { Grid, Text } from '@mantine/core';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, MatchRoute, Outlet } from '@tanstack/react-router';

export function InvoicesComponent() {
	const invoicesQuery = useSuspenseQuery(invoicesQueryOptions());
	const invoices = invoicesQuery.data;

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
