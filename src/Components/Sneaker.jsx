import React from 'react'
import { useParams } from 'react-router-dom'
import { mainSneakers, otherSneakers } from '../data';

export default function Sneaker() {
    const { title } = useParams();
    const sneaker = mainSneakers.find(x => x.title == title) || otherSneakers.find(x => x.title == title);
    return (
        <div className='ind-sneaker'>
            <div className='sneaker-img'>
                <img src={sneaker.image} alt="" />
            </div>
            <div className='sneaker-description'>
                <div className='heading'>
                    <h1>{sneaker.title}</h1>
                    <h1 style={{ color: "#f8604f" }}>${sneaker.price}</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum explicabo veniam maxime earum sunt praesentium debitis optio eaque deleniti! Quia aspernatur minima illo laboriosam.
                </p>
                <div className='ind-sneaker-footer'>
                    <div className='quantity'>
                        <span className='quantity-btn' style={{ marginTop: "10px" }}><i className='bx bx-minus'></i></span><span className='quantity-count'>0   </span><span className='quantity-btn' style={{ marginTop: "7px" }}><i className='bx bx-plus'></i></span>
                    </div>
                    <div className='add-to-cart'>Add to Cart</div>
                </div>
            </div>
        </div>
    )
}
