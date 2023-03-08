import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/data/database'

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')


  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  // find the user based on the session
  const user = await db.user.findUnique({
    where: { authToken: session },
    include: { customer: true},
    select: { email: true, favorites: true, firstName: true, lastName: true, profilePhotoURL: true  },
  })


  // if `user` exists set `event.locals` 
  if (user) {
    event.locals.user = {
      email: user.email,
      role: user.role.name,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePhotoURL,
      favorites: user.favorites
    }
  }

  // load page as normal
  return await resolve(event)
}