import type { PageServerLoad, Action, Actions } from "./types"

import { db } from "$lib/data/database"

export const load: PageServerLoad = async ({ params }) => {

  const id = params.slug

  // get vehicle by id

  const vehicle = await db.vehicle.findUnique({ 
    where: {
      id: id 
    },
    include: {
      media: true,
    }, 
  })
  
  return {vehicle}
}
