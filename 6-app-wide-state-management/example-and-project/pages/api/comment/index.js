import { MongoClient } from 'mongodb';

export default function commentHandler(req, res) {
	if (req.method === 'POST') {
		const { text, name, email_address, event_id } = req.body;
		const comment = {
			text: text,
			name: name,
			email_address: email_address,
			id: new Date().toISOString(),
			event_id: event_id,
		};
		MongoClient.connect('mongodb://localhost:27017', (err, mongo_client) => {
			if (err) return res.status(500).json({ message: err.message });

			const db = mongo_client.db('nextjs-example-db').collection('comment');
			db.insertOne(comment).then(() => {
				mongo_client.close();
				return res.status(200).json({ message: 'Your comment was saved' });
			});
		});
	} else return res.status(503).json({ message: 'API not implemented' });
}
