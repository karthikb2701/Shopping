import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Product from "../component/Product";
import Header from '../component/header';
import Sidebar from '../component/sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import counterContext from '../counterContext';
import styled from "styled-components";


function Home() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [material, setMaterial] = useState([]);
	const [cart, setCart] = useState(0);

	const { counter, increment, decrement } = useContext(counterContext)

	useEffect(() => {
		console.log("Ssss");
		const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', config);

				const response1 = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', config);


				setData(response.data.products);
				setMaterial(response1.data.material);
				console.log(response);
				console.log(response1);

			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		}

		fetchData();
	}, []);

	return <>

		<Header />
		<div className='row'>
			<div className='col-3'>
			<Sidebar />
			</div>
			<div className='col-9'>

				<div className='row'>

					{data.map((item) => (
						<div className='col-4'>
							<Product item={item} key={item.id} />
						</div>
					))}
				</div>
			</div>
		</div>








	</>
}

export default Home;
