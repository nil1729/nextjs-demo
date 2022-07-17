import classes from './style.module.css';
import Button from '../../ui/button';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import MONTHS from '../../../months';

function EventSearch() {
	const router = useRouter();
	const year_ref = useRef();
	const month_ref = useRef();

	const form_submit_handler = (e) => {
		e.preventDefault();

		const year = year_ref.current.value;
		const month = month_ref.current.value;

		router.push(`/events/${year}/${month}`);
	};

	return (
		<form className={classes.form} onSubmit={form_submit_handler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor='year'>Year</label>
					<select ref={year_ref} name='year' id='year'>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor='month'>Month</label>
					<select ref={month_ref} name='month' id='month'>
						{MONTHS.map((month, index) => (
							<option key={index} value={index + 1}>
								{month}
							</option>
						))}
					</select>
				</div>
				<div className={classes.btn_div}>
					<Button title='Find Events' />
				</div>
			</div>
		</form>
	);
}

export default EventSearch;
