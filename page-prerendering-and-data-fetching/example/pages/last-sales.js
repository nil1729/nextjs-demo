import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function LastSalesPage(props) {
	const [sales, setSales] = useState(props.sales);
	const [isLoading, setIsLoading] = useState(false);

	const { data, error } = useSWR(
		'https://next-js-demo-nil1729-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
		fetcher
	);
	useEffect(() => {
		if (data) {
			console.log(data);
			const transformedSalesData = [];
			for (const key in data) {
				transformedSalesData.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				});
			}
			setSales(transformedSalesData);
		}
	}, [data]);

	if (error) return <h1>Failed to load.</h1>;
	if (!data || !sales) return <h1>Loading ...</h1>; // this component will be pre-render

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	fetch(
	// 		'https://next-js-demo-nil1729-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			const transformedSalesData = [];

	// 			for (const key in data) {
	// 				transformedSalesData.push({
	// 					id: key,
	// 					username: data[key].username,
	// 					volume: data[key].volume,
	// 				});
	// 			}

	// 			setSales(transformedSalesData);
	// 			setIsLoading(false);
	// 		});
	// }, []);
	// if (isLoading) return <h1>Loading ....</h1>;
	// if (!sales) return <h1>No data yet</h1>; // this component will be pre-render

	return (
		<>
			<ul>
				{sales.map((sale) => (
					<li key={sale.id}>
						{sale.username} - {sale.volume}
					</li>
				))}
			</ul>
		</>
	);
}

export default LastSalesPage;

export async function getStaticProps() {
	// build the project and add a new entry to the database after the build process
	const response = await fetch(
		'https://next-js-demo-nil1729-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
	);
	const data = await response.json();

	const transformedSalesData = [];
	for (const key in data) {
		transformedSalesData.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume,
		});
	}

	return {
		props: {
			sales: transformedSalesData,
		},
	};
}
