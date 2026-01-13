import type { Metadata } from 'next'
import { getCurrentDeal } from '@/data/deals'

const currentDeal = getCurrentDeal()
const baseUrl = 'https://www.woot.vc'
const imageUrl = `${baseUrl}${currentDeal.shareImageURL}`

export const metadata: Metadata = {
  title: currentDeal.shareTitle,
  description: currentDeal.shareDescription,
  openGraph: {
    url: baseUrl,
    type: 'website',
    title: currentDeal.shareTitle,
    description: currentDeal.shareDescription,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: currentDeal.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: currentDeal.shareTitle,
    description: currentDeal.shareDescription,
    images: [imageUrl],
  },
}
