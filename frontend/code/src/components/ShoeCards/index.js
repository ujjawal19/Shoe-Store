import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Cards';
import { useLocation } from 'react-router-dom';


function ShoeCards({ filters, search }) {

    const [product, setProduct] = useState([]);

    const baseURL = 'http://localhost:3004/shoes/';


    const fetchShoes = async (filters, search) => {
        const size = filters?.sizeFilter ? filters?.sizeFilter : null;
        const category = filters?.categoryFilter ? filters?.categoryFilter : null;
        const price = filters?.priceFilter ? filters?.priceFilter : null;
        const _search = search ? search : null;
        const { data } = await axios.get(baseURL, { params: { size: size, price_lte: price, category: category, q: _search } });
        setProduct(data);
    };

    useEffect(() => {
        fetchShoes(filters, search);
    }, [filters, search]);

    if(product.length !== 0){
        return (
            <div className='cards'>
                {
                    product.map((item) => {
                        return (
                            <Cards data={item} />)
                    })
                }
            </div>
        )
    }
    else{
        return (
        <div className='m-5 p-5'>
            You have no product matching that filter
        </div>
        )
    }
}

export default ShoeCards