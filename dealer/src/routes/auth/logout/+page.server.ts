import type { PageServerLoad, Action, Actions } from "./types"

import { redirect } from "@sveltejs/kit"

const logout: Action = async ({ cookies, request }) => {
  const redirectUrl = request.headers.get("referer") || "/"
  cookies.set("session", "", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  })
  throw redirect(302, redirectUrl)
}

export const actions: Actions = {
  default: logout,
}
