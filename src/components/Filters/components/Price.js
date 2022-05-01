import React,{useState} from 'react'

function Price({setPrice}) {

  const handlePrice = (e) =>{
    console.log(e.target.value);
    setPrice(e.target.value);
  }
  return (
        <div className='is-flex is-flex-direction-column px-4'>
            <div className='title'>
            <   span className='p-2'>Price</span>
            </div>
        <input className="slider is-fullwidth is-warning" step="1" min="0" max="100" type="range" onChange={(e)=>{handlePrice(e)}}/>
        {/* {shoePrice} */}
    </div>
  )
}

export default Price