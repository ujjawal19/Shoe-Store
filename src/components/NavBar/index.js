import React,{useState,useEffect} from 'react'
import AddShoes from '../AddShoes'

function NavBar({setSearch}) {

    const [isActive, setisActive] = React.useState(false);
    const handleSearch = (e) =>{
        setSearch(e.target.value);
    }
    return (
        <nav className="navbar nav-container" id="my-nav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a onClick={()=>{
                    setisActive(!isActive);
                }}  
                role="button"
                className="navbar-item is-text-bold is-size-4 "  >
                    Sneak a Peak
                </a>

                <a role="button" id="burger" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active">
            <input className="searchshoe input is-rounded input-focus-box-shadow-color my-2 mx-6 " type="text" placeholder="Search Shoe" onChange={(e) => handleSearch(e)} />

            <div>
            </div>
                

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                                <AddShoes/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;