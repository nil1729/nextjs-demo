import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import validator from 'validator';

export default async function handler(req, res) {
	try {
		if (req.method === 'POST') {
			const { email_address, password } = req.body;
			if (!password || (password && password.length < 6)) {
				return res.status(400).json({ message: 'password should be at least 6 characters long' });
			}
			if (!validator.isEmail(email_address)) {
				return res.status(400).json({ message: 'Email address is not valid' });
			}
			const hashed_password = await hashPassword(password);

			const mongo_client = await connectToDatabase();
			const db = mongo_client.db('nextjs-example-db').collection('users');

			const existing_user_with_same_email = await db.findOne({ email_address: email_address });
			if (existing_user_with_same_email) {
				mongo_client.close();
				return res.status(400).json({ message: 'Email address already registered' });
			}

			await db.insertOne({
				email_address: email_address,
				password: hashed_password,
			});

			mongo_client.close();
			return res.status(200).json({ message: 'User registered successfully' });
		} else return res.status(503).json({ message: 'API not implemented' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
}
