import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';
import NewsletterRegistration from '../components/newsletter';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Dev Events</title>
				<meta name='description' content='Some Description' />
			</Head>
			<NewsletterRegistration />
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
