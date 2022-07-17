import { Fragment, useContext } from 'react';
import Header from './header';
import classes from './style.module.css';
import NotificationSection from '../ui/notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);
	const activeNotification = notificationCtx.notification;

	return (
		<Fragment>
			<Header />
			<main className={classes.container}>{props.children}</main>
			{activeNotification && (
				<NotificationSection
					title={activeNotification.title}
					status={activeNotification.status}
					message={activeNotification.message}
				/>
			)}
		</Fragment>
	);
}

export default Layout;
