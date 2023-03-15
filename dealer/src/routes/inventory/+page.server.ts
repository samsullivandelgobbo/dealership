

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

// const favorite: Action = async ({ request, locals }) => {
//   // check if removing or adding favorite


//   const data = await request.formData()
//   const body = await request.json()
//   console.log(body)
//   const vehicleId = data.get('vehicleId')
//   let userFavorites = locals.user.favorites
//   console.log(userFavorites)
//   console.log(vehicleId)

//   if (userFavorites.includes(vehicleId)) {

//     // get favorite id
//     const favoriteId = await db.vehicleFavorites.findMany({
//       where: {
//         customerId: locals.user.id,
//         vehicleId: vehicleId,
//       },
//       select: {
//         id: true,
//       },
//     })
//     console.log(favoriteId)

//     const favorite = await db.vehicleFavorites.delete({
//       where: { id: favoriteId[0].id },
//     })
//     console.log(favorite)
//     return { favorite: false }
//   }


//   if (locals.user.role !== 'customer') {
//     return { error: 'You must be logged in as a customer to favorite a vehicle'}
//   }
//   const customerId = locals.user.id
//   console.log(customerId)
//   const favorite = await db.vehicleFavorites.create({
//     data: {
//       customerId: customerId,
//       vehicleId: vehicleId,
//     },
//   })
//   return { added: true }
// }


// export const actions: Actions = { favorite }
