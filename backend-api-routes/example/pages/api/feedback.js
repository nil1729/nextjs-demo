import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
	const file_path = path.join(process.cwd(), '_data', 'feedback.json');
	return file_path;
}

export function readFeedbackData(file_path) {
	const file_data = fs.readFileSync(file_path, 'utf-8');
	const feedback_data = JSON.parse(file_data);
	return feedback_data;
}

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email_address, feedback_text } = req.body;

		const new_feedback = {
			id: new Date().toISOString(),
			email_address: email_address,
			feedback_text: feedback_text,
		};

		const feedback_data = readFeedbackData(buildFeedbackPath());
		feedback_data.push(new_feedback);
		fs.writeFileSync(buildFeedbackPath(), JSON.stringify(feedback_data));

		return res.status(201).json({ success: true, message: 'feedback submitted!' });
	} else if (req.method === 'GET') {
		res.status(200).json(readFeedbackData(buildFeedbackPath()));
	} else res.status(503).json({ message: 'Method not implemented' });
}

export default handler;
