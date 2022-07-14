import { Fragment } from 'react';
import { getEventsByMonthAndYear } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ErrorAlert from '../../components/ui/error-alert';
import FilteredEventTitle from '../../components/events/filtered-event';

function FilteredEvents(props) {
	if (props.has_error) {
		return <ErrorAlert error_message='Invalid filter. Please adjust your filters' />;
	}

	if (!props.events) {
		return <h1 className='center'>Loading ...</h1>;
	}

	if (props.events.length === 0) {
		return <ErrorAlert error_message='No events found for the chosen filter!' />;
	}

	return (
		<Fragment>
			<FilteredEventTitle month_index={props.date.num_month - 1} year={props.date.num_year} />
			<EventList event_items={props.events} />
		</Fragment>
	);
}

export default FilteredEvents;

export async function getServerSideProps(context) {
	const { params } = context;
	const data_filters = params.slug;

	if (data_filters.length !== 2) {
		return {
			// notFound: true,
			// redirect: {
			// 	destination: '/error',
			// },
			props: {
				has_error: true,
			},
		};
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
		return {
			// notFound: true,
			// redirect: {
			// 	destination: '/error',
			// },
			props: {
				has_error: true,
			},
		};
	}

	const events = await getEventsByMonthAndYear(num_year, num_month - 1);

	return {
		props: {
			events: events,
			date: { num_month: num_month, num_year: num_year },
		},
	};
}
