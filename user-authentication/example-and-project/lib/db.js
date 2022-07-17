import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const mongo_client = await MongoClient.connect(process.env.MONGODB_URI);
	return mongo_client;
}
