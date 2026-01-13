import type { Metadata } from 'next'
import { getCurrentDeal } from '@/data/deals'

const currentDeal = getCurrentDeal()
const baseUrl = 'https://www.woot.vc'
const imageUrl = `${baseUrl}${currentDeal.shareImageURL}`

export const metadata: Metadata = {
  title: 'Simple Sabotage Manual - Woot! VC by Root VC',
  description: 'A professional guide to accomplishing absolutely nothing, inspired by the OSS\'s original effective handbook. Ideal for anyone committed to inefficiency, procedural purity, and the quiet confidence of being the reason nothing works.',
  openGraph: {
    url: baseUrl,
    type: 'website',
    title: 'Simple Sabotage Manual - Woot! VC by Root VC',
    description: 'A professional guide to accomplishing absolutely nothing, inspired by the OSS\'s original effective handbook. Ideal for anyone committed to inefficiency, procedural purity, and the quiet confidence of being the reason nothing works.',
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
    title: 'Simple Sabotage Manual - Woot! VC by Root VC',
    description: 'A professional guide to accomplishing absolutely nothing, inspired by the OSS\'s original effective handbook. Ideal for anyone committed to inefficiency, procedural purity, and the quiet confidence of being the reason nothing works.',
    images: [imageUrl],
  },
}
