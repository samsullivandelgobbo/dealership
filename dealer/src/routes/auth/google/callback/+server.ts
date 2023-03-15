import { error, json, redirect } from "@sveltejs/kit"

import { db } from "$lib/data/database"


export async function GET({ url, cookies, request }) {

  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state") || "/"
  console.log("State:", state)

  //get google access token & id token for name
  async function getProfileTokens() {
    let params = {
      code: code,
      client_id: import.meta.env.VITE_GOOGLE_CLIENTID,
      client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT,
      grant_type: "authorization_code",
    }

    let url =
      "https://oauth2.googleapis.com/token?" + new URLSearchParams(params)

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return res.json()
  }

  let profileTokens = await getProfileTokens()

  //fetch id_token for profile info
  let id_token = profileTokens.id_token

  async function getProfileInfo() {
    const url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + id_token
    const res = await fetch(url, {
      method: "GET",
    })
    return res.json()
  }

  const profileInfo = await getProfileInfo()
  const name = {
    firstName: profileInfo.given_name,
    lastName: profileInfo.family_name,
  }
  const profilePic = profileInfo.picture

  const access_token = profileTokens.access_token

  const email = profileInfo.email

  const user = await db.user.findUnique({
    where: { email },
    include: { customer: true },
  });

  if (!user) {
    const newCustomer = await db.customer.create({
      data: {
        user: {
          create: {
            email,
            authMethod: 1,
            authToken: access_token,
            authExpiry: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hour expiry
            firstName: name.firstName,
            lastName: name.lastName,
            profilePhotoURL: profilePic,
          },
        }
      }
    })

    if (!newCustomer) {
      console.error("Error creating user")
    }
  } else {


    const authenticatedCustomer = await db.customer.update({
      where: user.customer,
      data: { 
        user: { 
          update: { 
            authToken: access_token,
            authExpiry: new Date(Date.now() + 1000 * 60 * 60 * 2) // 2 Hour expiry
          } 
        } 
      },
    })
  }




  // const user = await db.user.findUnique({
  //   where: { email },
  // })

  // if (!user) {
  //   const newUser = await db.user.create({
  //     data: {
  //       email,
  //       authMethod: 1,
  //       authToken: access_token,
  //       role: { connect: { name: Roles.USER } },
  //       firstName: name.firstName,
  //       lastName: name.lastName,
  //       profilePhotoURL: profilePic,
        
  //     },
  //   })
  //   if (!newUser) {
  //     console.error("Error creating user")
  //   }
  // } else {
  //   const authenticatedUser = await db.user.update({
  //     where: { email: email },
  //     data: { userAuthToken: access_token },
  //   })
  // }

  cookies.set("session", access_token, {
    // send cookie for every page
    path: "/",
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: "strict",
    // only sent over HTTPS in production
    secure: process.env.NODE_ENV === "production",
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  })
  throw redirect(302, state)
}
