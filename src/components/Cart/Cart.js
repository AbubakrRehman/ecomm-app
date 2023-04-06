import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../../store/cart-slice";
import classes from "./Cart.module.css";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

    const dispatch = useDispatch();
    const removeItemFromCardHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }
    const addItemToCartHandler = (cartItem) => {
        dispatch(cartActions.addItemToCart(cartItem));
    }

    const clearItemFromCardHandler = (id) => {
        dispatch(cartActions.clearItemFromCart(id));
    }

    return (
        <div className={classes.cartConatiner}>
            <div className={classes.cartCol}>
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
                                            <button onClick={() => removeItemFromCardHandler(cartItem.id)} type="button" className="btn btn-outline-danger m-2">-</button>
                                            {cartItem.quantity}
                                            <button onClick={() => addItemToCartHandler(cartItem)} type="button" className="btn btn-outline-danger m-2">+</button>
                                            <p className="card-text">Item-Price: &#8377; {Math.round(cartItem.price * 100) / 100}</p>
                                            <p className="card-text">Sub-Total: &#8377; {Math.round(cartItem.totalPrice * 100) / 100}</p>
                                        </div>
                                    </div>
                                    {/* <p>hello bhail log</p> */}
                                    <div><button onClick={() => clearItemFromCardHandler(cartItem)} type="button" className="btn btn-outline-danger m-2">Remove</button></div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className={classes.cartCol}>
                <div className={classes.totalPrice}>
                    <p>Cart Status</p>
                    <p> &#8377; {Math.round(cartTotalPrice*100)/100}</p>
                </div>

            </div>
        </div>

    )
}

export default Cart;