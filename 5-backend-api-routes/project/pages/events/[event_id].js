import Head from 'next/head';
import { getEventDetail, getFeaturedEvents } from '../../helpers/api-util';
import { Fragment } from 'react';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';
import CommentSection from '../../components/comments';

function EventDetailPage(props) {
	const selected_event = props.selected_event;
	const { title, speaker, content, country, date, image, event_host_organization } = selected_event;

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content.substring(0, 100) + '....'} />
			</Head>
			<EventSummary title={title} />
			<EventLogistics
				image={image}
				country={country}
				date={date}
				speaker={speaker}
				event_host_organization={event_host_organization}
				image_alt={title}
			/>
			<EventContent>
				<p>{content}</p>
			</EventContent>
			<CommentSection event_id={selected_event.id} />
		</Fragment>
	);
}

export default EventDetailPage;

export async function getStaticProps(context) {
	const { params } = context;
	const eventDetails = await getEventDetail(params.event_id);

	if (!eventDetails) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			selected_event: eventDetails || null,
		},
		revalidate: 30, // in seconds
	};
}

export async function getStaticPaths() {
	const featuredEvents = await getFeaturedEvents();

	return {
		paths: featuredEvents.map((event) => {
			return {
				params: {
					event_id: event.id,
				},
			};
		}),
		fallback: 'blocking',
	};
}
