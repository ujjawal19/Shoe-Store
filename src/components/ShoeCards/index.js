import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Cards';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


function ShoeCards({filters,search}) {

    let location = useLocation();
    const [product, setProduct] = useState([]);
 
    const baseURL = 'http://localhost:3000/shoes/';
    const query = queryString.parse(location.search);


    const fetchShoes = async (filters,search) => {
        const size = filters?.sizeFilter ? filters?.sizeFilter : null;
        const category =filters?.categoryFilter ? filters?.categoryFilter : null;
        const price = filters?.priceFilter? filters?.priceFilter: null;
        const _search = search? search: null;
        const { data } = await axios.get(baseURL,{params:{size:size,price_lte:price,category:category,q:_search}});
        setProduct(data);
    };
    
    useEffect(() => {
        fetchShoes(filters,search);
    }, [filters,search]);

    return (
        <div className='cards'>
            {
                product.map((item) =>{
                    return ( 
                    <Cards data={item}/>)
                })
            }
        </div>
    )
}

export default ShoeCards