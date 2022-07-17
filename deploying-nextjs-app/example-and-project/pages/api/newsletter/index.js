import { MongoClient } from 'mongodb';

export default async function NewsletterHandler(req, res) {
	try {
		if (req.method === 'POST') {
			const { email_address } = req.body;
			const mongo_client = await MongoClient.connect(process.env.MONGODB_URI);
			const db = mongo_client.db('nextjs-example-db').collection('newsletter');
			await db.insertOne({ email_address: email_address });
			mongo_client.close();
			return res.status(200).json({ message: 'Successfully registered for newsletter' });
		} else return res.status(503).json({ message: 'API not implemented' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
}
