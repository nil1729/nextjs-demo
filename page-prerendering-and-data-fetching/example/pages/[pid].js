import fs from 'fs';
import path from 'path';

function ProductDetailsPage(props) {
	const { loadedProduct } = props;

	// if `fallback` set to true
	if (!loadedProduct) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
}

async function getData() {
	const filePath = path.join(process.cwd(), '_data', 'dummy-backend.json');
	const jsonData = await fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pid;
	const data = await getData();
	const product = data.products.find((product) => product.id === productId);

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			loadedProduct: product,
		},
	};
}

export async function getStaticPaths() {
	const data = await getData();
	return {
		paths: data.products.map((product) => {
			return {
				params: {
					pid: product.id,
				},
			};
		}),
		fallback: false,

		// paths: [{ params: { pid: 'p1' } }],
		// fallback: true
		// if all params not listed on paths should be valid
		// but for this we have to setup a fallback on our component too

		// paths: [{ params: { pid: 'p1' } }],
		// fallback: 'blocking'
		// if all params not listed on paths should be valid
		// by this we don't need to setup a fallback on our component
	};
}

export default ProductDetailsPage;
