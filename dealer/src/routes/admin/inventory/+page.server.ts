import type { PageServerLoad, Action, Actions } from './types'

import { db } from '$lib/data/database'

export const load: PageServerLoad = async () => {
  const vehicles = await db.vehicle.findMany({
    include: {
      media: true,
      inStockVehicle: true,
      soldVehicle: true,
      customerVehicle: true,
    },
  })

  return {
    vehicles,

  }
}