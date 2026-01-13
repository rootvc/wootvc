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
  body1: string
  body2: string
  bodyTweetCode?: string
  productStats: string
  shareImageURL: string
  date: string
  donations?: string
  shareTitle: string
  shareDescription: string
}

export interface DealsData {
  deals: Deal[]
}

export const deals = (dealsData as DealsData).deals

export const getCurrentDeal = (): Deal => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  // Filter deals that are in the past or today
  const pastDeals = deals.filter(deal => {
    const dealDate = new Date(deal.date)
    dealDate.setHours(0, 0, 0, 0)
    return dealDate <= today
  })
  
  if (pastDeals.length === 0) {
    // If no past deals, return the last deal as fallback
    return deals[deals.length - 1]
  }
  
  // Sort by date descending and return the most recent
  pastDeals.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
  
  return pastDeals[0]
}

export const getPastDeals = (): Deal[] => {
  const currentDeal = getCurrentDeal()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const currentDealDate = new Date(currentDeal.date).getTime()
  
  // Get all deals that are in the past but not the current deal
  return deals.filter(deal => {
    const dealDate = new Date(deal.date)
    dealDate.setHours(0, 0, 0, 0)
    const dealDateTime = dealDate.getTime()
    return dealDate <= today && dealDateTime !== currentDealDate
  }).sort((a, b) => {
    // Sort by date descending (most recent first)
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export const hasMultipleDeals = (): boolean => {
  return deals.length > 1
}
