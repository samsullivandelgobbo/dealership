import type { Action, Actions, PageServerLoad } from "./$types"

import fs from "fs"

import { db } from "$lib/data/database"

const vehicle: Action = async ({ request, cookies }) => {
  const data = await request.formData()

  const make = data.get("make")
  const model = data.get("model")
  const year = parseInt(data.get("year"))
  const price = parseInt(data.get("price"))
  const odometer = parseInt(data.get("odometer"))
  const vin = data.get("vin")
  const color = data.get("color")
  const interiorColor = data.get("interior_color")
  const trim = data.get("trim")

  if (!make || !model || !year || !price || !odometer || !vin || !color || !interiorColor || !trim) {
    throw new Error("Required fields are missing or invalid.")
  }

  const newVehicle = await db.vehicle.create({
    data: {
      make,
      model,
      year,
      price,
      odometer,
      vin,
      color,
      interiorColor,
      trim,
    },
  })
  const newInStockVehicle = await db.inStockVehicle.create({
    data: {
      vehicle: { connect: { id: newVehicle.id } },
}
})

  try {
    //throws error if static/img dir isnt created
    await fs.promises.mkdir(`static/img/${newVehicle.id}`)
    const files = data.getAll("file")
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const ab = await file.arrayBuffer()
      const ext = file.name.split(".").pop()
      const filename = `${newVehicle.id}_${i}`



      const newImage = await db.VehicleMedia.create({
        data: {
          url: `img/${newVehicle.id}/${filename}.${ext}`,
          vehicle: { connect: { id: newVehicle.id } },
          type: ext,
        },
      })

      const buffer = Buffer.from(ab, "utf8")
      await fs.promises.writeFile(
        `static/img/${newVehicle.id}/${filename}.${ext}`,
        buffer
      )
      console.log(`File ${filename}.${ext} saved successfully`)

    }
  } catch (error) {
    console.error(`Error while creating new vehicle or images: ${error}`)
    throw new Error("Failed to create vehicle or images.")
  }

  return { status: 200 }
}

export const actions: Actions = { vehicle }
