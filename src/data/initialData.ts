import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  price: '0.00',
}

export const initialInvoice: Invoice = {

  clientName: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Price',
  productLineQuantityAmount: 'Total',
  productLines: [
    {
      description: '',
      quantity: '1',
      price: '0.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (20%)',
  totalLabel: 'TOTAL',
  currency: '$',
}
