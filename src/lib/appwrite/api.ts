import { account } from '@/lib/appwrite/config.ts'
import { ID } from 'appwrite'

import { INewUser } from '@/Types'

export async function createUserAccount(user: INewUser) {
	try {
		const newAccount = await account.create(
			ID.unique(),
			user.email,
			user.password,
			user.name
		)

		return newAccount
	} catch (e) {
		console.log(e)
		return e
	}
}