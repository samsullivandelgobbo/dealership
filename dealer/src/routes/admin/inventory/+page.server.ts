import type { PageServerLoad, Action, Actions } from './types'

import { db } from '$lib/data/database'

// export const load: PageServerLoad = async () => {
//   const vehicles = await db.inventory.findMany({
//     include: {
//       photos: true,
//     },
//     where: {
//       inStock: true,
//       dateSold: null
//     }
//   })
//   const soldVehicles = await db.inventory.findMany({
//     include: {
//       photos: true,
//     },
//     where: {
//       inStock: false,
//     }
//   })
//   return {
//     vehicles,
//     soldVehicles
//   }
// }