import React from 'react'
import AddShoes from '../AddShoes'

function NavBar({ setSearch, setOpenFilters, isMobile }) {

    const [isActive, setisActive] = React.useState(false);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const toggleDropdown = () => {
        const myNav = document.querySelector("#my-nav");
        const burger = document.querySelector("#burger");
        myNav.classList.toggle("is-active");
        burger.classList.toggle("is-active");
    }
    const onFilters = () => {
        setOpenFilters(prev => !prev)
    }
    return (
        <nav className="navbar nav-container" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a onClick={() => {
                    setisActive(!isActive);
                }}
                    role="button"
                    className="navbar-item is-text-bold is-size-4 "  >
                    Sneak a Peak
                </a>

                <a role="button" id="burger" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleDropdown}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="my-nav" className="navbar-menu  navbar-end">
                <div><input className="searchshoe input is-rounded input-focus-box-shadow-color my-2 mx-2" type="text" placeholder="Search Shoe" onChange={(e) => handleSearch(e)} /></div>

                <div className="navbar-end">
                    <div className="navbar-item is-flex">
                        <div className="mx-1">
                            <AddShoes />
                        </div>
                        {isMobile && <div className="mx-1">
                            <button className="button is-primary" onClick={onFilters}>Filters</button>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;