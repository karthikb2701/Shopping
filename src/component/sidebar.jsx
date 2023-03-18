import React, { useContext, useEffect, useState } from 'react';

import '../App.css';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import counterContext from '../counterContext';
import { FaShoppingCart } from 'react-icons/fa';



function Header() {
    const [loading, setLoading] = useState(true);
    const [material, setMaterial] = useState([]);

    useEffect(() => {
        console.log("Ssss");
        const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const fetchData = async () => {
            setLoading(true);
            try {


                const response1 = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', config);



                setMaterial(response1.data.material);

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);


    return <>

        <div className='tags p-5'>
            <li>All</li>
            <li>Genric</li>
            <li>Genric</li>
            <li>Genric</li>
            <li>Genric</li>
        </div>

        <div className='tags p-5'>
            <span className='font-weight-bold'>Materials</span>
            <li>All</li>
            {
                material.map((e) => {
                    return (
                        <li>{e.name}</li>
                    )

                })
            }

        </div>

        <div className='tags p-5'>
            <span className='font-weight-bold'>Materials</span>
            <li>All</li>
            <li>Blue</li>
            <li>Green</li>
            <li>Yellow</li>
            <li>Genric</li>
        </div>



    </>
}

export default Header;
