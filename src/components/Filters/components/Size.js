import React,{useEffect} from 'react'

function Size({size,setSize}) {

    const handleSize = (e) =>{
        console.log(e.target.value);
        setSize(e.target.value);
    }

    
    return (
        <div className='is-flex is-flex-direction-column px-4 '>
            <div className='title'>
                <span className='p-2'>Size</span>
                <hr></hr>
            </div>
            <div className="control is-size-4 ">
                <label className="radio m-1" type= "radio">
                    <input type="radio" name="size" className="m-1 " checked ={size === '6'}  value="6" onChange={(e)=>handleSize(e)}/>
                        6
                </label>
                <label className="radio m-1" type="radio">
                    <input type="radio" name="size" className="m-1" checked ={size === '7'} value="7" onChange={(e)=>handleSize(e)}/>
                        7
                </label>
                <label className="radio m-1" type="radio">
                    <input type="radio" name="size" className="m-1" checked ={size === '8'}  value="8" onChange={(e)=>handleSize(e)}/>
                        8
                </label>
                <label className="radio m-1" type="radio">
                    <input type="radio" name="size" className="m-1"  checked ={size === '9'} value="9" onChange={(e)=>handleSize(e)}/>
                        9
                </label>

                <label className="radio m-1" type="radio">
                    <input type="radio" name="size" className="m-1" checked ={size === '10'}   value="10" onChange={(e)=>handleSize(e)}/>
                        10
                </label>

            </div>
        </div>

    )
}

export default Size