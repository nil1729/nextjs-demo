import { useRef, useState, useContext } from 'react';
import Button from '../../ui/button';
import styles from './style.module.css';
import NotificationContext from '../../../store/notification-context';

function PasswordChangeBox() {
	const [submitting, setSubmitting] = useState(false);
	const new_password_input = useRef();
	const old_password_input = useRef();
	const notificationCtx = useContext(NotificationContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		notificationCtx.showNotification({
			title: 'Sending comment ...',
			message: 'Your request is currently being processed',
			status: 'pending',
		});

		const response = await fetch('/api/user/change-password', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				old_password: old_password_input.current.value,
				new_password: new_password_input.current.value,
			}),
		});
		const data = await response.json();

		if (response.ok) {
			notificationCtx.showNotification({
				title: 'Success!',
				message: data.message,
				status: 'success',
			});

			old_password_input.current.value = '';
			new_password_input.current.value = '';
		} else {
			notificationCtx.showNotification({
				title: 'Error!',
				message: data.message || 'Something went wrong !!',
				status: 'error',
			});
		}

		setSubmitting(false);
	};

	return (
		<div>
			<form className={styles.my_form} onSubmit={handleSubmit}>
				<div className={styles.form_control}>
					<label htmlFor='new_password'>New Password</label>
					<input ref={new_password_input} type='password' name='new_password' required />
				</div>
				<div className={styles.form_control}>
					<label htmlFor='old_password'>Old Password</label>
					<input ref={old_password_input} type='password' name='old_password' required />
				</div>
				<div className={styles.my_btn_div}>
					<Button
						type='submit'
						title={submitting ? 'Loading' : 'Change Password'}
						disabled={submitting}
					/>
				</div>
			</form>
		</div>
	);
}

export default PasswordChangeBox;
