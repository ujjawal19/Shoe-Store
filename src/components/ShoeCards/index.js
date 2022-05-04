import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Cards';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


function ShoeCards({filters}) {

    let location = useLocation();
    console.log({location});;
    const [product, setProduct] = useState([]);
 
    const baseURL = 'http://localhost:3000/shoes/';
    const query = queryString.parse(location.search);
    console.log({query});
    // console.log(query.get("category"));
    // console.log(window.location.href);
    const [search, setSearch] = useState({
        category: [],
        price: 0,
        size:0
    });

    console.log({filters});

    const fetchShoes = async (filters) => {
        const size =filters?.sizeFilter;
        const category =(filters?.categoryFilter);
        const price = (filters?.priceFilter)
        console.log({filters,size});
        const { data } = await axios.get(baseURL,{params:{size:size,price:price}});
        setProduct(data);
    };
    
    useEffect(() => {
        fetchShoes(filters);
    }, [filters]);
    
    console.log({product});
    // console.log();
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