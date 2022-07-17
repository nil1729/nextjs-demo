import styles from './style.module.css';
import NotificationContext from '../../../store/notification-context';
import { useContext } from 'react';

function NotificationSection({ title, message, status }) {
	const notificationCtx = useContext(NotificationContext);

	let statusClasses = '';

	if (status === 'success') {
		statusClasses = styles.success;
	}

	if (status === 'error') {
		statusClasses = styles.error;
	}

	if (status === 'pending') {
		statusClasses = styles.pending;
	}

	let activeClasses = `${statusClasses} ${styles.notification}`;

	return (
		<section className={activeClasses} onClick={notificationCtx.hideNotification}>
			<h2>{title}</h2>
			<p>{message}</p>
		</section>
	);
}

export default NotificationSection;
