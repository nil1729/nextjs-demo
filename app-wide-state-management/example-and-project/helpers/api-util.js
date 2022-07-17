export async function getAllEvents() {
	const response = await fetch(
		'https://next-js-demo-nil1729-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
	);
	const data = await response.json();

	const events = [];
	for (const key in data) {
		events.push(data[key]);
	}
	return events;
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter((event) => event.is_featured);
}

export async function getEventDetail(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => event.id === id);
}

export async function getEventsByMonthAndYear(year, month) {
	const allEvents = await getAllEvents();
	return allEvents.filter(
		(event) =>
			new Date(event.date).getFullYear() === year && new Date(event.date).getMonth() === month
	);
}
