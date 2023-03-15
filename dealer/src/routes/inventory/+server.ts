import { error, json, redirect } from "@sveltejs/kit"

import { db } from "$lib/data/database"

// post favorites

export async function POST({ request, locals }) {
  const data = await request.json()
  const vehicleId = data.vehicleId
  const userId = locals.user.id
  const userFavorites = locals.user.favorites
  console.log("User Favorites: ", userFavorites)
  console.log("Vehicle ID: ", vehicleId)
  console.log("User ID: ", userId)

  if (userFavorites.includes(vehicleId)) {
    console.log("Removing favorite")
    // get favorite id
    const favoriteId = await db.vehicleFavorites.findMany({
      where: {
        customerId: userId,
        vehicleId: vehicleId,
      },
      select: {
        id: true,
      },
    })

    const favorite = await db.vehicleFavorites.delete({
      where: { id: favoriteId[0].id },
    })

    return json({ body: { favorite: false } })
  } else {
    console.log("Adding favorite")
    const favorite = await db.vehicleFavorites.create({
      data: {
        customerId: userId,
        vehicleId: vehicleId,
      },
    })

    return json({ body: { favorite: true } })
  }
}
