import React from 'react'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (
        <div className="nav-color navbar-fixed">
            <nav>
            <div className="nav-wrapper">
                <h3 className="brand-logo">PHARAKO</h3>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Photos</Link></li>
                    <li><Link to='/cart'><i className="material-icons">add_shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
