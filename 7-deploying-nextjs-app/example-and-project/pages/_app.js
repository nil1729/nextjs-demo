import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/layout';
import { NotificationContextProvider } from '../store/notification-context';

function MainApp({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<title>Dev Events</title>
					<meta name='description' content='Some Common Description' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}

export default MainApp;
