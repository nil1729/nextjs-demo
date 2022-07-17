import { authOptions } from '../auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

async function handler(req, res) {
	try {
		if (req.method === 'PUT') {
			const session = await unstable_getServerSession(req, res, authOptions);

			if (!session) {
				return res
					.status(401)
					.json({ message: 'You are not authenticated to complete this action' });
			}

			const { old_password, new_password } = req.body;
			if (!new_password || (new_password && new_password.length < 6)) {
				return res.status(400).json({ message: 'password should be at least 6 characters long' });
			}

			if (old_password === new_password) {
				return res.status(400).json({ message: 'old and new password should not be same' });
			}

			const mongo_client = await connectToDatabase();
			const db = mongo_client.db('nextjs-example-db').collection('users');

			const user_doc = await db.findOne({
				email_address: session.user.email,
			});

			if (!user_doc) {
				mongo_client.close();
				throw new Error('Something went wrong !!');
			}

			if (!(await verifyPassword(old_password, user_doc.password))) {
				mongo_client.close();
				return res.status(400).json({ message: 'Incorrect password provided' });
			}

			const new_hashed_password = await hashPassword(new_password);
			await db.updateOne(
				{
					email_address: session.user.email,
				},
				{ $set: { password: new_hashed_password } }
			);

			mongo_client.close();
			return res.status(200).json({ message: 'Password has been changes successfully' });
		} else return res.status(503).json({ message: 'API not implemented' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
}

export default handler;
