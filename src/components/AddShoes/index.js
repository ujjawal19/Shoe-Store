import axios from 'axios';
import React, { useState } from 'react';


const AddShoes = () => {
    const [items, setItems] = useState({
        name: "",
        category: "Loafers",
        img: "",
        description: "",
        price: 0,
        size: 0

    });
    const handleInput = (e) => {
        var letters =/^[A-Za-z]+$/
        if (e.target.name === 'Name') 
            e.target.value.match(letters) ?  setItems({ ...items, name: e.target.value }) : alert("Enter the Name in alphabets only ") 

        if (e.target.localName === 'select')
            setItems({ ...items, category: e.target.value })

        if (e.target.name === 'Description')
            setItems({ ...items, description: e.target.value });

        if (e.target.name === 'Price') {
            if (e.target.value < 0 || isNaN(e.target.value))
                alert("Enter the price in correct format");
            else
                setItems({ ...items, price: e.target.value });
        }

        if (e.target.name === 'Size') {
            if (e.target.value < 0 || isNaN(e.target.value))
                alert("Enter the size in correct format");
            else
                setItems({ ...items, size: e.target.value });
        }

        if (e.target.id === 'image')
        {
            console.log(e.target.value)
            setItems({ ...items, img: `http://localhost:3000/assets/${e.target.value}` })
        }
    }
    const handleOpenForm = () => {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("content-container").style.overflow = "hidden";
    }

    const handleClose = () => {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("content-container").style.overflow = "";
        setItems({
            name: "",
            category: "Loafers",
            img: "",
            description: "",
            price: 0,
            size: 0
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/shoes", items).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e.response);
        });
        handleClose();
    }

    return (
        <div>
            <button className="button is-success open-button" onClick={handleOpenForm} >Add Shoes</button>
            <div className="form-popup" id="myForm">
                <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
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
                                    <option value="Sneakers">Sneakers</option>
                                    <option selected value="Loafers">Loafers</option>
                                    <option value="Boots">Boots</option>
                                    <option value="Sports Shoes">Sports Shoes</option>
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
                            <input className="input" name="Price" value={items.price} onChange={(e) => { handleInput(e) }} type="text" placeholder="Enter the Shoe Price" required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Size</label>
                        <div className="control">
                            <input className="input" name="Size" value={items.size} onChange={(e) => { handleInput(e) }} type="text" placeholder="Enter the Shoe Size" required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Image</label>
                        <div className="control">
                            <div className="select" name="Image" value={items.img} onChange={(e) => { handleInput(e) }}>
                                <select id='image'>
                                    <option selected value="shoe1.jpg">Shoe Image1</option>
                                    <option  value="shoe2.jpg">Shoe Image2</option>
                                    <option value="shoe4.jpg">Shoe Image3</option>
                                    <option value="shoe5.jpg">Shoe Image4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-primary is-outlined m-3" type='submit'>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-danger is-outlined m-3" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShoes