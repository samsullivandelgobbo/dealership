import type { Handle } from "@sveltejs/kit"
import { db } from "$lib/data/database"

export const handle: Handle = async ({ event, resolve }) => {

  // Handle authentication

  // get cookies from browser
  const session = event.cookies.get("session")

  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  // find the user based on the session
  const user = await db.user.findUnique({
    where: { authToken: session },
    include: { customer: true, admin: true, mechanic: true, salesPerson: true },
  })

  // check authtoken expiry date

  if (user && user.authExpiry < new Date()) {
    console.log('token expired')

    // if token expired delete token and redirect to login
    await db.user.update({
      where: { id: user.id },
      data: { authToken: crypto.randomUUID(), authExpiry: new Date() },
    })
    event.cookies.delete('session')



    return await resolve(event)
      
  } else {
    console.log('token valid')
  }


  enum Role {
    admin = "admin",
    customer = "customer",
    mechanic = "mechanic",
    salesPerson = "salesPerson",
  }
  
  let role = user.admin
    ? Role.admin
    : user.mechanic
    ? Role.mechanic
    : user.salesPerson
    ? Role.salesPerson
    : user.customer
    ? Role.customer
    : null

  if (user) {
    if (role !== Role.customer) {
      event.locals.user = {
        id: user.id,
        role: role,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePhotoURL,
      }
    } else if (role === Role.customer) {
      // query db for customer favorites

      const favorites = await db.vehicleFavorites.findMany({
        where: { customerId: user.id },
        include: { vehicle: true },
      })


      event.locals.user = {
        id: user.id,
        role: role,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePhotoURL,
        favorites: favorites.map((favorite) => favorite.vehicle.vehicleId),
      }
    }
  }

  // load page as normal
  return await resolve(event)
}
