import { useState } from 'react';
import { buildFeedbackPath, readFeedbackData } from '../api/feedback';

function FeedbackPage(props) {
	const [feedbackData, setFeedbackData] = useState();

	const loadFeedbackDetail = (feedback_id) => async () => {
		try {
			const response = await fetch(`/api/${feedback_id}`);
			const data = await response.json();
			setFeedbackData(data.feedback);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			{feedbackData && <p>{feedbackData.email_address}</p>}
			<ul>
				{props.feedback_items.map((feedback) => (
					<li key={feedback.id}>
						{feedback.feedback_text}{' '}
						<button onClick={loadFeedbackDetail(feedback.id)}>Show Details</button>
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			feedback_items: readFeedbackData(buildFeedbackPath()),
		},
	};
}

export default FeedbackPage;
