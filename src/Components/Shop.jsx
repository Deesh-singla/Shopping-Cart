import React from 'react'
import { mainSneakers, otherSneakers } from "../data.js"
export default function Shop() {
    return (
        <div className='shop' >
            <h1>Our best collection</h1>
            <div className='sneakers'>
                {mainSneakers.map((data, index) => (
                    <div className='sneaker shop-sneaker' style={{
                        border: "3px solid black",
                        borderRadius: "20px"
                    }} key={index}>
                        <img src={data.image} alt="" />
                        <hr />
                        <div>
                            <p>{data.title}</p>
                            <p className='price'>${data.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
