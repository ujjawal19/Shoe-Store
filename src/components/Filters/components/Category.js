import React, { useState } from 'react'

function Category({setCategory}) {


    const handleCheckbox = (e) => {
        if (e.target.checked === true) {
            console.log(e.target.name);
            setCategory(e.target.name);
        }
        
    }
    // categories.forEach((category)=>{
    //     console.log(category);
    // })
    return (
        <div className='is-flex is-flex-direction-column px-4'>
            <div className='title'>
                <span className='p-2 '>Category</span>
            </div>
            <label className='my-1 checkbox'>
                <input type="checkbox" name='Sneakers' onChange={(e) => { handleCheckbox(e) }} />
                <span className='p-2 '>Sneakers</span>
            </label>
            <label className='my-1 checkbox'>
                <input type="checkbox" name='Loafers' onChange={(e) => { handleCheckbox(e) }} />
                <span className='p-2 '>Loafers</span>

            </label>
            <label className='my-1 checkbox'>
                <input type="checkbox" name='Boots' onChange={(e) => { handleCheckbox(e) }} />
                <span className='p-2 '>Boots</span>

            </label>
            <label className='my-1 checkbox'>
                <input type="checkbox" name="Sports Shoes" onChange={(e) => { handleCheckbox(e) }} />
                <span className='p-2 '>Sports Shoes</span>
            </label>
            <div>
                {/* {categories.map(name => <h2>{name}</h2>)} */}
            </div>

        </div>
    )
}

export default Category