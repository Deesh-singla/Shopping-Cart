import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, remove } from './cartSlice';


export default function Cart() {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].quantity * cart[i].price);
    }
    return (
        <div className='shopping-cart'>
            <table>
                <thead>
                    <tr className='heading-row'>
                        <td>product</td>
                        <td>qunatity</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((x, index) => (
                        <tr key={index} className='cart-sneaker'>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                    <div className='cart-product'>
                                        <div className='cart-product-image'>
                                            <img src={x.image} />
                                        </div>
                                        <div>
                                            <p>{x.title}</p>
                                            <p onClick={() => dispatch(remove(x))}>remove</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="quantity-cell">
                                <div className="quantity-box">
                                    <span>{x.quantity}</span>
                                    <div className="quantity-buttons">
                                        <button onClick={() => dispatch(incrementQuantity(x))}>▲</button>
                                        <button onClick={() => dispatch(decrementQuantity(x))}>▼</button>
                                    </div>
                                </div>
                            </td>
                            <td>${x.quantity * x.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='total-price'>
                <hr />
                <h2>${total}</h2>
                <Link to="/home"><button>Proceed to checkout</button></Link>
            </div>
        </div>
    )
}
