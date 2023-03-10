import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/data/database'



export const load: PageServerLoad = async () => {
  // todo
}

const register: Action = async ({ cookies, request, locals }) => {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')
  const confirmPassword = data.get('confirmPassword')
  const name = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName')
  }
  console.log(email, password, confirmPassword)

  if (password !== confirmPassword) {
    return fail(400, { passwordMismatch: true })
  }

  if (locals.errors) {
    console.log(locals.errors)
  }

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof name.firstName !== 'string' ||
    typeof name.lastName !== 'string' ||
    
    !email ||
    !password ||
    !name.firstName ||
    !name.lastName
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { email },
  })

  if (user) {
    return fail(400, { user: true })
  }


  const newUser = await db.user.create({
    data: {
      email,
      authMethod: 0,
      passwordHash: await bcrypt.hash(password, 10),
      authToken: crypto.randomUUID(),
      firstName: name.firstName,
      lastName: name.lastName,
    },
  })
  console.log(newUser)
  const newCustomer = await db.customer.create({
    data: {
      user: {
        connect: { id: newUser.id }
      }
    }
  })

  // const newCustomer = await db.customer.create({
  //   data: {
  //     user: {
  //       create: {
  //         email,
  //         authMethod: 0,
  //         passwordHash: await bcrypt.hash(password, 10),
  //         authToken: crypto.randomUUID(),
  //         firstName: name.firstName,
  //         lastName: name.lastName,
  //       },
  //     }
  //   }
  // })
  console.log(newCustomer)
  cookies.set('session', newUser.authToken, {
    // send cookie for every page
    path: '/',
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: 'strict',
    // only sent over HTTPS in production
    secure: process.env.NODE_ENV === 'production',
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  })

  throw redirect(303, '/auth/login')
}

export const actions: Actions = { register }
