import type { PageServerLoad } from './types';

import { db } from '$lib/data/database'



export const load: PageServerLoad = async (locals) => {

  const userId = locals.locals.user.id
  const userFavorites = await db.inStockVehicle.findMany({
    where: {
      favorites: {
        some: { customerId: userId }
      },
    },
    include: {
      vehicle: {
        include: {
          media: true,
        }
      },

    },
  })


  return {
    userFavorites,

  }
}