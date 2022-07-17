import { connectToDatabase } from '../../../lib/db';

export default async function commentHandler(req, res) {
	try {
		if (req.method === 'POST') {
			const { text, name, email_address, event_id } = req.body;
			const comment = {
				text: text,
				name: name,
				email_address: email_address,
				id: new Date().toISOString(),
				event_id: event_id,
			};
			const mongo_client = await connectToDatabase();
			const db = mongo_client.db('nextjs-example-db').collection('comment');
			await db.insertOne(comment);
			mongo_client.close();
			return res.status(200).json({ message: 'Your comment was saved' });
		} else return res.status(503).json({ message: 'API not implemented' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong!' });
	}
}
