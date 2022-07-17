import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function Home(props) {
	const { products } = props;
	return (
		<ul>
			{products.map((product) => (
				<li key={product.id} style={{ marginBottom: '10px' }}>
					<Link href={`/${product.id}`}>{product.title}</Link>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	console.log('(Re-)Generating ...');
	const filePath = path.join(process.cwd(), '_data', 'dummy-backend.json');
	const jsonData = await fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);

	if (!data) {
		return {
			redirect: {
				destination: '/no-data',
			},
		};
	}

	if (data.products.length === 0) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			products: data.products,
		},
		revalidate: 10, // seconds
	};
}

export default Home;
