import Head from 'next/head';
import { Fragment } from 'react';
import LoginBox from '../../components/login';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

function LoginPage() {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login to your Account' />
			</Head>
			<LoginBox />
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(context.req, context.res, authOptions);

	if (session) {
		return {
			redirect: {
				destination: '/profile',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

export default LoginPage;
