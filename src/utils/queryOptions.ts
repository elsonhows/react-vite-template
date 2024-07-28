import { fetchInvoiceById, fetchInvoices } from './mockToDo';
import { queryOptions } from '@tanstack/react-query';

export const invoicesQueryOptions = () =>
	queryOptions({
		queryKey: ['invoices'],
		queryFn: () => fetchInvoices(),
	});

export const invoiceQueryOptions = (invoiceId: number) =>
	queryOptions({
		queryKey: ['invoices', invoiceId],
		queryFn: () => fetchInvoiceById(invoiceId),
	});
