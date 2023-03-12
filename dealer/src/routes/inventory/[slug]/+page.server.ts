import type { PageServerLoad, Action, Actions } from './types'

import { db } from '$lib/data/database'

export const load: PageServerLoad = async ({params}) => {
  console.log('[slug] page.svelte', params)
}