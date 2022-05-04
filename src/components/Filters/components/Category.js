import React from 'react'

function Category({setCategory,category}) {


    const handleCheckbox = (e) => {
        if (e.target.checked === true) {
            console.log(e.target.name);
            setCategory([...category,e.target.name]);
        }
        else{
            console.log("Removed category "+ e.target.name);
            //Remove the value from state when checkbox is empty
            setCategory(category.filter((catg)=>{
                return catg !== e.target.name;
            }));
        }   
    }
    return (
        <div className='is-flex is-flex-direction-column px-4 combine'>
            <div className='title'>
                <span className='p-2 filterwhite'>Category</span>
            </div>
            <label className='my-1 checkbox '>
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
          
        </div>
    )
}

export default Category