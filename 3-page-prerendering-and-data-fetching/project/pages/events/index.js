import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<EventSearch />
			<EventList event_items={props.events} />
		</Fragment>
	);
}

export default HomePage;

export async function getStaticProps() {
	const allEvents = await getAllEvents();
	return {
		props: {
			events: allEvents,
		},
		revalidate: 10,
	};
}
