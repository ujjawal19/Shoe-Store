import React,{useState} from 'react'    
import { useHistory } from "react-router-dom";
import Category from './components/Category'
import Price from './components/Price'
import Size from './components/Size'

function Filters() {

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/?category=${category}&price=${price}&size=${size}`)
    }

    const [category, setCategory] = useState([])

    const [price, setPrice] = useState(0)

    const [size, setSize] = useState(0)

        
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className='m-4 has-background-white filter-container'>
                <div className='category-container'>
                    <Category setCategory={setCategory} />
                </div>
                <div className='size-container'>
                    <Price setPrice={setPrice} />
                </div>
                <div className='price-container'>
                    <Size setSize={setSize} />
                </div>
                <div>
                    <button className="button is-primary is-outlined m-2">Apply Filter</button>
                    <button className="button is-danger is-outlined m-2">Reset</button>
                </div>
            </div>
        </form>
    )
}

export default Filters