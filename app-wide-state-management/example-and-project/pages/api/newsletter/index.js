import { MongoClient } from 'mongodb';

export default function NewsletterHandler(req, res) {
	if (req.method === 'POST') {
		const { email_address } = req.body;

		MongoClient.connect('mongodb://localhost:27017', (err, mongo_client) => {
			if (err) return res.status(500).json({ message: err.message });

			const db = mongo_client.db('nextjs-example-db').collection('newsletter');
			db.insertOne({ email_address: email_address }).then(() => {
				mongo_client.close();
				return res.status(200).json({ message: 'Successfully registered for newsletter' });
			});
		});
	} else return res.status(503).json({ message: 'API not implemented' });
}
