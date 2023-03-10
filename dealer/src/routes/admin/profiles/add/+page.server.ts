import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/data/database'

export const load: PageServerLoad = async () => {
  // todo
}

const register: Action = async ({ cookies, request }) => {
  const token = cookies.get('session')
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')
  const name = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName')
  }
  const userType = data.get('userType')

  enum UserType {
    salesPerson = 'salesPerson',
    admin = 'admin',
    mechanic = 'mechanic'
  }

}


