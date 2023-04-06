import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../../store/cart-slice";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const removeFromCardHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }
    const addItemToCartHandler = (cartItem) => {
        dispatch(cartActions.addItemToCart(cartItem));
    }

    return (
        <div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={cartItem.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{cartItem.title}</h5>
                                        <p className="card-text">Quantity</p>
                                        <button onClick={() => removeFromCardHandler(cartItem.id)} type="button" className="btn btn-outline-danger m-2">-</button>
                                        {cartItem.quantity}
                                        <button onClick={() => addItemToCartHandler(cartItem)} type="button" className="btn btn-outline-danger m-2">+</button>
                                        <p className="card-text">Item-Price: &#8377; {cartItem.price}</p>
                                        <p className="card-text">Sub-Total: &#8377; {cartItem.totalPrice}</p>
                                    </div>
                                </div>
                                {/* <p>hello bhail log</p> */}
                                <div><button type="button" className="btn btn-outline-danger m-2">Remove</button></div>
                            </div>
                        </div>
                    )

                })
            }
        </div>

    )
}

export default Cart;