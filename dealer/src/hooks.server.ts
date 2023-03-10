import type { Handle } from "@sveltejs/kit"
import { db } from "$lib/data/database"

export const handle: Handle = async ({ event, resolve }) => {

  // Handle Login and Register errors
  // if (event.url.pathname.startsWith("/auth/login") || event.url.pathname.startsWith("/auth/register")) {
  //   const data = await event.request.formData()
  //   const email = data.get("email")
  //   const password = data.get("password")
  //   const confirmPassword = data.get("confirmPassword")
    
  //   if (password !== confirmPassword) {
  //     event.locals.errors = {
  //       passwordMismatch: true,
  //     }
  //   }
  //   console.log(event)
  //   return await resolve(event)
  // }



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

  enum Role {
    admin = "admin",
    customer = "customer",
    mechanic = "mechanic",
    salesPerson = "salesPerson",
  }

  let role = user.admin
    ? Role.admin
    : user.customer
    ? Role.customer
    : user.mechanic
    ? Role.mechanic
    : user.salesPerson
    ? Role.salesPerson
    : null

  // if `user` exists set `event.locals`
  if (user) {
    event.locals.user = {
      role: role,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePhotoURL,
      favorites: user.favorites,
    }
  }

  // load page as normal
  return await resolve(event)
}
