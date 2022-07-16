import { useRef, useState } from 'react';
import Button from '../../ui/button';
import styles from './style.module.css';

function CommentInputBox({ event_id }) {
	const [submitting, setSubmitting] = useState(false);
	const email_address = useRef();
	const user_name = useRef();
	const comment_text = useRef();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setSubmitting(true);
			const response = await fetch('/api/comment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					text: comment_text.current.value,
					email_address: email_address.current.value,
					name: user_name.current.value,
					event_id: event_id,
				}),
			});
			const data = await response.json();
			alert(data.message);
			setSubmitting(false);
			comment_text.current.value = '';
			email_address.current.value = '';
			user_name.current.value = '';
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<form className={styles.my_form} onSubmit={handleSubmit}>
				<div className={styles.my_row}>
					<div className={styles.form_control}>
						<label htmlFor='email_address'>Your Email Address</label>
						<input ref={email_address} type='text' name='email_address' required />
					</div>
					<div className={styles.form_control}>
						<label htmlFor='name'>Your Name</label>
						<input ref={user_name} type='text' name='name' required />
					</div>
				</div>
				<div className={styles.textarea_div}>
					<label htmlFor='comment'>Your Comment</label>
					<textarea ref={comment_text} name='comment_text' required rows='6'></textarea>
				</div>
				<div className={styles.my_btn_div}>
					<Button type='submit' title={submitting ? 'Loading' : 'Submit'} disabled={submitting} />
				</div>
			</form>
		</div>
	);
}

export default CommentInputBox;
