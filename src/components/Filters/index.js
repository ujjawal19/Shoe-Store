import React,{useState} from 'react'    
import { useHistory } from "react-router-dom";
import Category from './components/Category'
import Price from './components/Price'
import Size from './components/Size'

function Filters(props) {

    const {setFilters}= props

    const [category, setCategory] = useState([])

    const [price, setPrice] = useState(0)

    const [size, setSize] = useState(0)

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/?category=${category}&price=${price}&size=${size}`);
        setFilters({
            categoryFilter: [category],
            sizeFilter: size,
            priceFilter: price
        })

    }
    console.log(category);
    const handleReset = (e) =>{
        e.preventDefault();
        setFilters({
            categoryFilter: [],
            sizeFilter: 0,
            priceFilter: 0
        });
        history.push('');

    }

        
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className='m-4 has-background-white filter-container'>
                <div className='category-container'>
                    <Category setCategory={setCategory} category={category} handleReset={handleReset} />
                </div>
                <br></br>
                <div className='size-container'>
                    <Price setPrice={setPrice} />
                </div>
                <br></br>
                <div className='price-container'>
                    <Size setSize={setSize} />
                </div>
                <br></br>
                <div>
                    <button className="button is-primary is-outlined m-2">Apply Filter</button>
                    <button onClick ={(e) => handleReset(e)} className="button is-danger is-outlined m-2">Reset</button>
                </div>
            </div>
        </form>
    )
}

export default Filters