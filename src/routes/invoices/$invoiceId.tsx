import { InvoiceComponent } from './-components/Invoice';
import { invoiceQueryOptions } from '@/utils/queryOptions';
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
