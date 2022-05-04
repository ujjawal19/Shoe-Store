import React,{useState} from 'react'

function Price({setPrice,price}) {

  const handlePrice = (e) =>{
    console.log(e.target.value);
    setPrice(e.target.value);
  }
  return (
        <div className='is-flex is-flex-direction-column px-4'>
            <div className='title'>
            <span className='p-2 '>Price</span>
            <hr></hr>
            </div>
            <span className='showprice'>{price}</span>
        <input className="slider is-fullwidth is-warning" step="1000" min="0" max="100000" type="range" value={price} onChange={(e)=>{handlePrice(e)}}/>
        
    </div>
  )
}

export default Price