import React from 'react'
import sneak1 from "../assets/sneakers/sneak1.png"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='main'>
            <div className='description' >
                <h1>The most <span >beautiful</span> and <span>high-quality</span> sneakers<br />
                    in the whole world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum optio?</p>
                <Link to="/shop"><button>Explore Now</button></Link>
            </div>
            <Link to="/shop/Nike Dunk Low Sesame" className='sneaker-link'>
                <div className='sneaker' style={{
                    margin: "30px",
                    marginRight: "20px",
                }}>
                    <img src={sneak1} alt="" />
                    <hr />
                    <div>
                        <p>Nike Dunk Low Sesame</p>
                        <p>$300</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
