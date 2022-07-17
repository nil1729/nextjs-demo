import styles from './style.module.css';
import Button from '../ui/button';
import { useRef, useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
	const email_address = useRef();
	const [submitting, setSubmitting] = useState(false);
	const notificationCtx = useContext(NotificationContext);

	const handleRegistration = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		notificationCtx.showNotification({
			title: 'Signing up ...',
			message: 'Registering for newsletter.',
			status: 'pending',
		});
		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email_address: email_address.current.value,
				}),
			});
			const data = await response.json();

			if (response.ok) {
				notificationCtx.showNotification({
					title: 'Success!',
					message: data.message,
					status: 'success',
				});
				email_address.current.value = '';
			} else throw new Error(data.message || 'Something went wrong !!');
		} catch (e) {
			notificationCtx.showNotification({
				title: 'Error!',
				message: e.message,
				status: 'error',
			});
		}
		setSubmitting(false);
	};

	return (
		<>
			<div className={styles.newsletter_container}>
				<header>
					<h2 className={styles.header_title}>Sign up to stay updated!</h2>
				</header>
				<section>
					<form className={styles.my_form} onSubmit={handleRegistration}>
						<input
							className={styles.my_input}
							type='email'
							name='email_address'
							placeholder='Your Email Address'
							ref={email_address}
							required
						/>
						<Button
							type='submit'
							title={submitting ? 'Loading ...' : 'Register'}
							disabled={submitting}
						/>
					</form>
				</section>
			</div>
		</>
	);
}

export default NewsletterRegistration;
