import axios from 'axios';
import React, { useState } from 'react';


const AddShoes = () => {

    const [items, setItems] = useState({
        id: 0,
        name: "",
        category: "",
        img: "",
        description: "",
        price: 0,
        size: 0

    });
    const handleInput = (e) => {
        if (e.target.name === 'Id')
            setItems({...items,  id: e.target.value })

        if (e.target.name === 'Name')
            setItems({...items,  name: e.target.value })

        if (e.target.name === 'Category')
            setItems({...items,  category: e.target.value })

        if (e.target.name === 'Description')
            setItems({...items,  description: e.target.value })

        if (e.target.name === 'Price')
            setItems({...items,  price: e.target.value })

        if (e.target.name === 'Size')
            setItems({...items,  size: e.target.value })

        if (e.target.name === 'Image')
            setItems({...items,  img: e.target.value })
    }
    const handleOpenForm = () => {
        document.getElementById("myForm").style.display = "block";
        
    }

    const handleClose = () => {
        document.getElementById("myForm").style.display = "none";

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(items.name != "" && items.category!=="" && items.price !=="" && items.price !== "" && items.size!== "")
        axios.post("http://localhost:3000/shoes",items);
        console.log({items});
    }
    // console.log(items);

    return (
        <div>
            <button class="button is-success open-button" onClick={handleOpenForm} >AddShoes</button>
            <div className="form-popup" id="myForm">
                <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
                    <div className="field">
                        <label className="label">Id</label>
                        <div className="control">
                            <input className="input" name="Id" onChange={(e) => { handleInput(e) }} type="number" placeholder="Enter the Id" value={items.id} required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" name="Name" onChange={(e) => { handleInput(e) }} type="text" placeholder="Enter the Shoe Name" value={items.name} required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Category</label>
                        <div className="control">
                            <div className="select" name="Category" value={items.category} onChange={(e) => { handleInput(e) }}>
                                <select>
                                    <option>Sneakers</option>
                                    <option>Loafers</option>
                                    <option>Boots</option>
                                    <option>Sports Shoes</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input name="Description" className="input" value={items.description} onChange={(e) => { handleInput(e) }} placeholder="Enter the Shoe Description" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input className="input" name="Price" value={items.price} onChange={(e) => { handleInput(e) }} type="number" placeholder="Enter the Shoe Price" required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Size</label>
                        <div className="control">
                            <input className="input" name="Size" value={items.size} onChange={(e) => { handleInput(e) }} type="number" placeholder="Enter the Shoe Size" required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Image</label>
                        <div className="control">
                            <input type ='file' className="input" name="Image" value={items.img} onChange={(e) => { handleInput(e) }} placeholder="Enter the Shoe Size" required />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type='submit'>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button  is-danger" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShoes