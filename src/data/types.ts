import { CSSProperties } from 'react'

export interface ProductLine {
  description: string
  quantity: string
  price: string
}

export interface Invoice {

  clientName: string

  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string
  taxLabel: string

  totalLabel: string
  currency: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
