

import type { PageServerLoad, Action, Actions } from './types'

import { db } from '$lib/data/database'



export const load: PageServerLoad = async () => {
  const inStockVehicles = await db.inStockVehicle.findMany({
    include: {
      vehicle: {
        include: {
          media: true,
        }
      },

    },
  })

  return {
    inStockVehicles,

  }
}