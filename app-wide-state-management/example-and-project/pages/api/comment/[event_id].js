import { MongoClient } from 'mongodb';

export default function getCommentsHandler(req, res) {
	if (req.method === 'GET') {
		const { event_id } = req.query;
		MongoClient.connect('mongodb://localhost:27017', (err, mongo_client) => {
			if (err) return res.status(500).json({ message: err.message });

			const db = mongo_client.db('nextjs-example-db').collection('comment');
			db.find({ event_id: event_id })
				.toArray()
				.then((docs) => {
					mongo_client.close();
					return res.status(200).json({ comments: docs });
				});
		});
	} else return res.status(503).json({ message: 'API not implemented' });
}
