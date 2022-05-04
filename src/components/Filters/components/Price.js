import React,{useState} from 'react'

function Price({setPrice}) {

  const[showPrice,setShowPrice] = useState(0);
  const handlePrice = (e) =>{
    console.log(e.target.value);
    setPrice(e.target.value);
    setShowPrice(e.target.value)
  }
  return (
        <div className='is-flex is-flex-direction-column px-4 combine'>
            <div className='title'>
            <span className='p-2 filterwhite'>Price</span>
            </div>
            <span className='showprice'>{showPrice}</span>
            {/* <input type="text" className='is-warning showprice' value={showPrice} ></input> */}
        <input className="slider is-fullwidth is-warning" step="1" min="1000" max="100000" type="range" onChange={(e)=>{handlePrice(e)}}/>
        
    </div>
  )
}

export default Price