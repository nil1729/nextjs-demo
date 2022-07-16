import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/layout';

function MainApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Dev Events</title>
				<meta name='description' content='Some Common Description' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MainApp;
