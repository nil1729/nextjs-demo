import styles from './style.module.css';
import Button from '../ui/button';
import { useRef, useState } from 'react';

function NewsletterRegistration() {
	const email_address = useRef();
	const [submitting, setSubmitting] = useState(false);

	const handleRegistration = async (e) => {
		try {
			e.preventDefault();
			setSubmitting(true);
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
			alert(data.message);
			setSubmitting(false);
			email_address.current.value = '';
		} catch (e) {
			console.log(e);
		}
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
