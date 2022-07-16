import classes from './style.module.css';
import Button from '../button';

function ErrorAlert({ error_message }) {
	return (
		<section className={classes.error_section}>
			<p className={classes.error_message}>{error_message}</p>
			<br />
			<Button link='/events' title='Show all Events' />
		</section>
	);
}

export default ErrorAlert;
