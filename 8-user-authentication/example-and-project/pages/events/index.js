import Head from 'next/head';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { Fragment } from 'react';

function EventsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Events</title>
				<meta name='description' content='Some Description' />
			</Head>
			<EventSearch />
			<EventList event_items={props.events} />
		</Fragment>
	);
}

export default EventsPage;

export async function getStaticProps() {
	const allEvents = await getAllEvents();
	return {
		props: {
			events: allEvents,
		},
		revalidate: 10,
	};
}
