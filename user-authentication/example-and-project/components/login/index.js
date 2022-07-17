import { useRef, useState, useContext } from 'react';
import Button from '../ui/button';
import styles from './style.module.css';
import NotificationContext from '../../store/notification-context';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

function AuthenticationBox() {
	const router = useRouter();
	const [loginState, setLoginState] = useState(true);
	const [submitting, setSubmitting] = useState(false);
	const email_input = useRef();
	const password_input = useRef();
	const notificationCtx = useContext(NotificationContext);

	function clearInput() {
		password_input.current.value = '';
		email_input.current.value = '';
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		notificationCtx.showNotification({
			title: 'Sending request ...',
			message: 'Your credentials are verifying, please wait',
			status: 'pending',
		});

		if (loginState) {
			const result = await signIn('credentials', {
				redirect: false,
				email_address: email_input.current.value,
				password: password_input.current.value,
			});

			if (result.error) {
				notificationCtx.showNotification({
					title: 'Error!',
					message: result.error,
					status: 'error',
				});
			} else {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully signed in',
					status: 'success',
				});
				clearInput();
				router.push('/profile');
			}
		} else {
			const response = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email_address: email_input.current.value,
					password: password_input.current.value,
				}),
			});
			const data = await response.json();

			if (response.ok) {
				notificationCtx.showNotification({
					title: 'Success!',
					message: data.message,
					status: 'success',
				});
				clearInput();
			} else {
				notificationCtx.showNotification({
					title: 'Error!',
					message: data.message || 'Something went wrong !!',
					status: 'error',
				});
			}
		}

		setSubmitting(false);
	};

	return (
		<div>
			<form className={styles.my_form} onSubmit={handleSubmit}>
				<h3 className={styles.header_title}>{loginState ? 'Login' : 'Sign Up'}</h3>
				<div className={styles.form_control}>
					<label htmlFor='email_address'>Your Email Address</label>
					<input ref={email_input} type='email' name='email_address' required />
				</div>
				<div className={styles.form_control}>
					<label htmlFor='password'>Your Password</label>
					<input ref={password_input} type='password' name='password' required />
				</div>
				<div className={styles.my_btn_div}>
					<Button
						type='submit'
						title={submitting ? 'Loading' : loginState ? 'Login' : 'Create Account'}
						disabled={submitting}
					/>
				</div>
				<div
					className={styles.my_btn_div}
					onClick={() => {
						setLoginState(!loginState);
					}}
				>
					<p>{loginState ? 'Create new account' : 'Login with existing account'}</p>
				</div>
			</form>
		</div>
	);
}

export default AuthenticationBox;
