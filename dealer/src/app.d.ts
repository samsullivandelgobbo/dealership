// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				email: string
				role: string
				firstName: string
				lastName: string
				profilePicture: string
				favorites: string[]
			},
			errors: {
				emailError: boolean
				passwordMismatch: boolean
				unauthorized: boolean
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
