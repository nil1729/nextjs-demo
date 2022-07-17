import { connectToDatabase } from '../../../lib/db';

export default async function getCommentsHandler(req, res) {
	try {
		if (req.method === 'GET') {
			const { event_id } = req.query;
			const mongo_client = await connectToDatabase();
			const db = mongo_client.db('nextjs-example-db').collection('comment');
			const docs = await db.find({ event_id: event_id }).toArray();
			mongo_client.close();
			return res.status(200).json({ comments: docs });
		} else return res.status(503).json({ message: 'API not implemented' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
}
