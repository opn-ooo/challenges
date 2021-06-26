export enum Currency {
  THB = 'THB'
}

export type CharityType = {
  id: number,
  name: string,
  image: string,
  currency: Currency,
}

export type PaymentType = {
  charitiesId: number,
  amount: number,
  currency: Currency,
  id: number,
}

export interface ResponseCharities {
  [index: number]: CharityType
}

export interface ResponsePayment {
  [index: number]: PaymentType
}