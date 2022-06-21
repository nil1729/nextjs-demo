import { getEventDetail } from '../../dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage() {
	const router = useRouter();
	const { event_id } = router.query;
	const selected_event = getEventDetail(event_id);

	if (!selected_event) {
		return <ErrorAlert error_message='Not found any event for the given ID' />;
	}

	const { title, speaker, content, country, date, image, event_host_organization } = selected_event;

	return (
		<Fragment>
			<EventSummary title={title} />
			<EventLogistics
				image={image}
				country={country}
				date={date}
				speaker={speaker}
				event_host_organization={event_host_organization}
			/>
			<EventContent>
				<p>{content}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
