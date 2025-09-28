import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export interface GoldSponsor {
  id: string
  name: string
  description: string
  image: {
    id: string
    url: string
    alt: string
  } | string
}

export const getGoldSponsors = async (): Promise<GoldSponsor[]> => {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    
    const sponsors = await payload.find({
      collection: 'sponsors-gold' as any,
    })

    return sponsors.docs as GoldSponsor[]
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return []
  }
}