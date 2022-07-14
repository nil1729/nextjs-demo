function UserProfilePage(props) {
	return (
		<>
			<h1>{props.username}</h1>
		</>
	);
}

export async function getServerSideProps(context) {
	const { params, req, res } = context;

	console.log('Server Side Code');

	return {
		props: {
			username: 'Nilanjan',
		},
	};
}

export default UserProfilePage;
