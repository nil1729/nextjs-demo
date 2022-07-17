import Image from 'next/image';
import classes from './style.module.css';
import CalendarIcon from '../../icons/calendar';
import LocationIcon from '../../icons/location';
import SpeakerIcon from '../../icons/speaker';
import Button from '../../ui/button';

function EventListItem({ event_item }) {
	const { image, title, speaker, date, country, id } = event_item;

	const human_readable_date = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
		day: 'numeric',
	});

	return (
		<div className={classes.event_item}>
			<div className={classes.event_item_image_div}>
				<Image src={image} alt={title} height={200} width={240} />
			</div>
			<div className={classes.event_item_content}>
				<h2 className={classes.title}>{title}</h2>
				<div className={classes.date}>
					<div className={classes.icon_div}>
						<CalendarIcon />
					</div>
					<time>{human_readable_date}</time>
				</div>
				<div className={classes.location}>
					<div className={classes.icon_div}>
						<LocationIcon />
					</div>
					<address>{country}</address>
				</div>
				<div className={classes.speaker}>
					<div className={classes.icon_div}>
						<SpeakerIcon />
					</div>
					<p>{speaker}</p>
				</div>
				<div className={classes.btn_div}>
					<Button title='Explore Events' link={`/events/${id}`} />
				</div>
			</div>
		</div>
	);
}

export default EventListItem;
