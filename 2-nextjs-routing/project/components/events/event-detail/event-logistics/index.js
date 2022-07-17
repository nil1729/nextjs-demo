import LogisticsItem from '../logistic-item';
import CalendarIcon from '../../../icons/calendar';
import LocationIcon from '../../../icons/location';
import classes from './style.module.css';
import SpeakerIcon from '../../../icons/speaker';
import EventHostOrganizationIcon from '../../../icons/even-host';

function EventLogistics({ image, date, country, speaker, event_host_organization }) {
	const human_readable_date = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
		day: 'numeric',
	});

	return (
		<section className={classes.logistics}>
			<div className={classes.image_div}>
				<img src={image} alt='' />
			</div>
			<ul className={classes.logistics_list}>
				<LogisticsItem icon={CalendarIcon}>
					<time>{human_readable_date}</time>
				</LogisticsItem>
				<LogisticsItem icon={LocationIcon}>
					<address>{country}</address>
				</LogisticsItem>
				<LogisticsItem icon={SpeakerIcon}>
					<p>{speaker}</p>
				</LogisticsItem>
				<LogisticsItem icon={EventHostOrganizationIcon}>
					<p>{event_host_organization}</p>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
