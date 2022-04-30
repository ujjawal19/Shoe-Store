import React from 'react'

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" >
                    App Name
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

                

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Add New Shoe</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar