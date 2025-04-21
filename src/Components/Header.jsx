import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header' >
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>Sneaker Shop</h2>
            </div>
            <div className='links'>
                <Link to={"/home"} className='nav-link'><p>Home</p></Link>
                <p>Shop</p>
            </div>
            <div className='cart'>
                <i className='bx bx-cart'></i>
            </div>
        </div>
    )
}
