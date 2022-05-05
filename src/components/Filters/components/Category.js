import React from 'react'

function Category({setCategory,category}) {


    const handleRadioButton = (e) => {
        // if (e.target.checked === true) {
            console.log(e.target.value);
            setCategory(e.target.value);
    }

    return (
        <div className='is-flex is-flex-direction-column px-4'>
            <div className='title'>
                <span>Category</span>
                <hr></hr>
            </div>

            <label className='my-1 radio pl-3 is-size-5 catgalign'>
                <input type="radio" name="category" value="Sneakers" checked ={category === 'Sneakers'} onChange={(e) => { handleRadioButton(e) }} />
                <span className='p-2'>Sneakers</span>
            </label>
            <label className='my-1 radio pl-3 is-size-5'>
                <input type="radio" name="category" value="Loafers"  checked ={category === 'Loafers'} onChange={(e) => { handleRadioButton(e) }} />
                <span className='p-2 '>Loafers</span>

            </label>
            <label className='my-1 radio pl-3 is-size-5'>
                <input type="radio" name="category" value="Boots"  checked ={category === 'Boots'}  onChange={(e) => { handleRadioButton(e) }} />
                <span className='p-2 '>Boots</span>

            </label>
            <label className='my-1 radio pl-3 is-size-5'>
                <input type="radio" name="category" value="Sports Shoes"  checked ={category === 'Sports Shoes'} onChange={(e) => { handleRadioButton(e) }} />
                <span className='p-2 '>Sports Shoes</span>
            </label>
          
        </div>
    )
}

export default Category