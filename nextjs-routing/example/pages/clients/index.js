import Link from 'next/link';

const ClientsPage = () => {
	const clients = [
		{
			id: 'nil1729',
			name: 'Nil Deb',
		},
		{ id: 'john', name: 'John Doe' },
	];

	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				{clients.map((clt) => (
					<li key={clt.id}>
						<Link
							// href={`/clients/${clt.id}`}
							href={{ pathname: '/clients/[client_id]', query: { client_id: clt.id } }}
						>
							{clt.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientsPage;
