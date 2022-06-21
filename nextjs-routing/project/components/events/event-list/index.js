import { Fragment } from 'react';
import EventListItem from '../event-list-item';

function EventList({ event_items }) {
	return (
		<Fragment>
			{event_items.map((item) => (
				<EventListItem key={item.id} event_item={item} />
			))}
		</Fragment>
	);
}

export default EventList;
