import { buildFeedbackPath, readFeedbackData } from './feedback';

async function handler(req, res) {
	if (req.method === 'GET') {
		const feedback_data = readFeedbackData(buildFeedbackPath());
		const feedback_id = req.query.feedback_id;
		const selectedFeedback = feedback_data.find((item) => item.id === feedback_id);

		if (!selectedFeedback) {
			return res.status(404).json({ message: 'Feedback not found' });
		}

		return res.status(200).json({ feedback: selectedFeedback });
	} else {
		res.status(503).json({ message: 'Method not implemented' });
	}
}

export default handler;
