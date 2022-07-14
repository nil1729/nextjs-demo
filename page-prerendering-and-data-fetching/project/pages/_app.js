import '../styles/globals.css';
import Layout from '../components/layout';

function MainApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MainApp;
