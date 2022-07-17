import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
	const router = useRouter();
	console.log(router.query);

	function load_project_handler() {
		// load data ...

		router.push({
			pathname: '/clients/[client_id]/[client_project_id]',
			query: {
				client_id: 'nil1729',
				client_project_id: 'project_one',
			},
		});

		// router.push(`/clients/nil1729/project_one`);
	}

	return (
		<div>
			<h1>The Projects of a given client</h1>
			<button onClick={load_project_handler}>Load Project One</button>
		</div>
	);
};

export default ClientProjectsPage;
