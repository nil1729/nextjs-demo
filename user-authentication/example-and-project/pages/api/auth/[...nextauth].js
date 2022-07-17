import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export const authOptions = {
	session: {
		jwt: true,
	},
	providers: [
		CredentialsProvider({
			authorize: async function (credentials) {
				const mongo_client = await connectToDatabase();
				const db = mongo_client.db('nextjs-example-db').collection('users');

				const user = await db.findOne({ email_address: credentials.email_address });
				if (!user) {
					mongo_client.close();
					throw new Error('Authentication Failed due to bad credentials');
				}

				if (!(await verifyPassword(credentials.password, user.password))) {
					mongo_client.close();
					throw new Error('Authentication Failed due to bad credentials');
				}

				mongo_client.close();
				return {
					email: credentials.email_address,
				};
			},
		}),
	],
	secret: process.env.SESSION_SECRET,
};

export default NextAuth(authOptions);
