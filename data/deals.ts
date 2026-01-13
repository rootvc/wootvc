import dealsData from './deals.json'

export interface Deal {
  heroImageURL: string
  title: string
  price: string
  shipping: string
  condition: string
  products: string
  checkoutUrl: string
  productInfoHeader: string
  productInfoBody: string
}

export interface DealsData {
  deals: Deal[]
}

export const deals = (dealsData as DealsData).deals

export const getCurrentDeal = (): Deal => {
  return deals[deals.length - 1]
}

export const getPastDeals = (): Deal[] => {
  return deals.slice(0, -1)
}


export function hasMultipleDeals(): boolean {
  return deals.length > 1
}
