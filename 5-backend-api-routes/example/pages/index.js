import { useRef, useState } from 'react';

function HomePage() {
	const [feedbackList, setFeedbackList] = useState([]);

	const emailInput = useRef();
	const feedbackInput = useRef();

	const submitRequest = async (e) => {
		try {
			e.preventDefault();
			const response = await fetch('/api/feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email_address: emailInput.current.value,
					feedback_text: feedbackInput.current.value,
				}),
			});
			const data = await response.json();
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};

	const loadFeedback = async () => {
		try {
			const response = await fetch('/api/feedback');
			const data = await response.json();
			setFeedbackList(data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={submitRequest}>
				<div>
					<label htmlFor='email'>Email Address</label>
					<input ref={emailInput} type='email' id='email' name='email' />
				</div>
				<div>
					<label htmlFor='feedback'>Feedback</label>
					<textarea ref={feedbackInput} name='feedback' id='feedback' cols='30' rows='5'></textarea>
				</div>
				<button type='submit'>Submit Request</button>
			</form>
			<hr />
			<button onClick={loadFeedback}>Load Feedback</button>
			<ul>
				{feedbackList.map((feedback) => (
					<li key={feedback.id}>{feedback.feedback_text}</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
