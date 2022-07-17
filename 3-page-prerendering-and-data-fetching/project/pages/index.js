import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<EventList event_items={props.events} />
		</Fragment>
	);
}

export default HomePage;

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800, // half hour
	};
}
