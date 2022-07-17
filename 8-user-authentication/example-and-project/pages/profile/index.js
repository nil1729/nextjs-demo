import Head from 'next/head';
import { Fragment } from 'react';
import ProfileSection from '../../components/profile';
// import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

function ProfilePage() {
	// const { status } = useSession({
	// 	required: true,
	// 	onUnauthenticated: function () {
	// 		window.location.href = '/auth';
	// 	},
	// });

	const Header = () => {
		return (
			<Head>
				<title>User Profile</title>
				<meta name='description' content='User Profile Description' />
			</Head>
		);
	};

	// if (status === 'loading') {
	// 	return (
	// 		<Fragment>
	// 			<Header />
	// 			<section>
	// 				<h1 className='center'>Loading ...</h1>
	// 			</section>
	// 		</Fragment>
	// 	);
	// }

	return (
		<Fragment>
			<Header />
			<ProfileSection />
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(context.req, context.res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: { session: JSON.parse(JSON.stringify(session)) },
	};
}

export default ProfilePage;
