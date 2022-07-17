import Button from '../../ui/button';
import classes from './style.module.css';
import MONTHS from '../../../months';

function FilteredEventTitle({ month_index, year }) {
	return (
		<section className={classes.filtered_event_section}>
			<h1 className={classes.filtered_event_title}>
				Events in {MONTHS[month_index]} {year}
			</h1>
			<Button link='/events' title='Show all Events' />
		</section>
	);
}

export default FilteredEventTitle;
