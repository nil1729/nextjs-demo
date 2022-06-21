import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';

function HomePage() {
	const events = getFeaturedEvents();

	return (
		<Fragment>
			<EventList event_items={events} />
		</Fragment>
	);
}

export default HomePage;
