import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import counterContext from '../counterContext'; 
import { FaShoppingCart } from 'react-icons/fa';



function Header() {

    const {counter, increment} = useContext(counterContext)
    return <>

        <div className='header p-3'>
            <h4 className='text-center font-weight-bold'>MYCOOLSHOP.COM</h4>
        </div>
        <div className=''>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">All Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/featured">Featured Products</a>
                            </li>
                        </ul>

                    </div>

                    <div class="navbar-collapse collapse ">
                        <ul class="navbar-nav ml-auto">
                            <li className='nav-item'> <FaShoppingCart style={{ fontSize: "20px" }} />{counter}</li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>



    </>
}

export default Header;
