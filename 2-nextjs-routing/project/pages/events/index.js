import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { Fragment } from 'react';

function HomePage() {
	const events = getAllEvents();

	return (
		<Fragment>
			<EventSearch />
			<EventList event_items={events} />
		</Fragment>
	);
}

export default HomePage;
