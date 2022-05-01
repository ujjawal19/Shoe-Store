import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../Cards'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ShoeCards() {

    const params= useParams();
    let location = useLocation();
    console.log({ params,location} )
    const [product, setProduct] = useState([]);
    const baseURL = 'http://localhost:3000/shoes/';

    const fetchPhotos = async () => {
        const { data } = await axios.get(baseURL)
        setProduct(data)
    };
    
    useEffect(() => {
        fetchPhotos();
    }, [])
    
    console.log({product})
    // console.log();
    return (
        <div className='cards'>
            {
                product.map((item) =>{
                    return ( <Cards data={item}/>)
                })
            }
        </div>
    )
}

export default ShoeCards