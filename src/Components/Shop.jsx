import React, { useState } from 'react'
import { mainSneakers, otherSneakers } from "../data.js"
import { Link } from 'react-router-dom'
export default function Shop() {
    const [show, setShow] = useState(false)
    return (
        <div className='shop' >
            <h1>Our best collection</h1>
            <div className='sneakers'>
                {mainSneakers.map((data, index) => (
                    <Link to={`/shop/${data.title}`} key={index} className='sneaker-link'>
                        <div className='sneaker shop-sneaker' style={{
                            border: "3px solid black",
                            borderRadius: "20px"
                        }}>
                            <img src={data.image} alt="" />
                            <hr />
                            <div>
                                <p>{data.title}</p>
                                <p className='price'>${data.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
                {show &&
                    <div className='sneakers'>
                        {otherSneakers.map((data, index) => (
                            <Link to={`/shop/${data.title}`} key={index} className='sneaker-link'>
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
                            </Link>
                        ))}
                    </div>
                }
            </div>
            {!show ?
                <div className='btn'>
                    <p onClick={() => setShow(true)}>show more <i className='bx bx-plus'></i></p>
                </div> :
                <div className='btn'>
                    <p onClick={() => setShow(false)}>show less <i className='bx bx-minus'></i></p>
                </div>

            }
        </div>
    )
}
