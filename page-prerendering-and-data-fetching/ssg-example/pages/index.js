function Home(props) {
	const { products } = props;

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
}

export async function getStaticProps(context) {
	return {
		props: {
			products: [{ id: 'p1', title: 'Product 1' }],
		},
	};
}

export default Home;
