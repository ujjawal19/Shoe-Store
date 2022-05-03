import React from 'react'
import AddShoes from '../AddShoes'

function NavBar() {
    return (
        <nav className="navbar nav-container" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" >
                    Sneak a Peak
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active">

                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>
                </div>
            <div>
            </div>
                

                <div className="navbar-end">
                    <div className="navbar-item">
                    <input className="input is-rounded my-2" type="text" placeholder="Enter Shoes Name"/>
                        <div className="buttons">
                            <a >
                                <strong><AddShoes/></strong>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar