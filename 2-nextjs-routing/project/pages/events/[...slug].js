import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventsByMonthAndYear } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ErrorAlert from '../../components/ui/error-alert';
import FilteredEventTitle from '../../components/events/filtered-event';

function FilteredEvents() {
	const router = useRouter();
	const data_filters = router.query.slug;

	if (!data_filters) {
		return <h1 className='center'>Loading ...</h1>;
	}

	if (data_filters.length !== 2) {
		return <ErrorAlert error_message='Invalid filter. Please adjust your filters' />;
	}

	const num_year = Number(data_filters[0]);
	const num_month = Number(data_filters[1]);

	if (
		isNaN(num_year) ||
		isNaN(num_month) ||
		num_year < 2021 ||
		num_year > 2030 ||
		num_month < 1 ||
		num_month > 12
	) {
		return <ErrorAlert error_message='Invalid filter. Please adjust your filters' />;
	}

	const events = getEventsByMonthAndYear(num_year, num_month - 1);

	if (events.length === 0) {
		return <ErrorAlert error_message='No events found for the chosen filter!' />;
	}

	return (
		<Fragment>
			<FilteredEventTitle month_index={num_month - 1} year={num_year} />
			<EventList event_items={events} />
		</Fragment>
	);
}

export default FilteredEvents;
