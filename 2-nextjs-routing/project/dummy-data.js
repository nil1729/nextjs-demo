const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Introducing Apache Kafka',
		content: `Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. Kafka can connect to external systems (for data import/export) via Kafka Connect, and provides the Kafka Streams libraries for stream processing applications. Kafka uses a binary TCP-based protocol that is optimized for efficiency and relies on a "message set" abstraction that naturally groups messages together to reduce the overhead of the network roundtrip. This "leads to larger network packets, larger sequential disk operations, contiguous memory blocks [...] which allows Kafka to turn a bursty stream of random message writes into linear writes`,
		is_featured: true,
		date: '2022-06-21',
		speaker: 'James Ward',
		event_host_organization: 'DevoxxUS',
		country: 'United States',
		image: '/images/kafka.png',
	},
	{
		id: 'e2',
		title: 'When to use MicroServices',
		content: `Upgrade your microservices knowledge by listening to a spirited conversation between two living legends: Sam Newman and Martin Fowler. The two touch upon the main reasons for using or not using microservices, and, if you decide to do use microservices, what else you should change along the way to fully benefit from the switch, plus much more`,
		is_featured: false,
		date: '2022-06-25',
		speaker: 'Sam Newman',
		event_host_organization: 'GOTO Conferences',
		country: 'United States',
		image: '/images/microservices.jpeg',
	},
	{
		id: 'e3',
		title: 'Introduction to NoSQL',
		content: `Martin gives a rapid introduction to NoSQL databases: where they came from, the nature of the data models they use, and the different way you have to think about consistency. From this he outlines what kinds of circumstances you should consider using them, why they will not make relational databases obsolete, and the important consequence of polyglot persistence.`,
		is_featured: true,
		date: '2022-07-15',
		speaker: 'Martin Fowler',
		event_host_organization: 'GOTO Conferences',
		country: 'United States',
		image: '/images/nosql.png',
	},
	{
		id: 'e4',
		title: 'Know Database Indexing',
		content: `Indexing is a way to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed. It is a data structure technique which is used to quickly locate and access the data in a database. Indexes are created using a few database columns.`,
		is_featured: false,
		date: '2022-03-20',
		speaker: 'Kai Sassnowski',
		event_host_organization: 'Laracon EU',
		country: 'England',
		image: '/images/indexing.png',
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.is_featured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getEventDetail(id) {
	return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getEventsByMonthAndYear(year, month) {
	return DUMMY_EVENTS.filter(
		(event) =>
			new Date(event.date).getFullYear() === year && new Date(event.date).getMonth() === month
	);
}
