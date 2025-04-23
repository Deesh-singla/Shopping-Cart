import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const data = useSelector(state => state.cart.value)
    return (
        <div className='header' >
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>Sneaker Shop</h2>
            </div>
            <div className='links'>
                <Link to={"/home"} className='nav-link'><p>Home</p></Link>
                <Link to={"/shop"} className='nav-link'>Shop</Link>
            </div>
            <div className='cart'>
                <Link to="/cart" className='nav-link'><i className='bx bx-cart'>{data.length}</i></Link>
            </div>
        </div>
    )
}
