import React, { useEffect, useState } from 'react';
import classes from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../../store/cart-slice";
import productSlice, { fetchProductData,productActions } from '../../store/product-slice';
import Notification from '../Notification/Notification';




function Product() {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.item);
    const productsNotification = useSelector((state) => state.product.notification);

    // const [product, setProduct] = useState({});
    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${productId}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //         setProduct(json);
        //     })
        dispatch(fetchProductData(productId));
        return () => dispatch(productActions.clearProductData())

    }, [dispatch, productId])

    const addToCardHandler = () => {
        dispatch(cartActions.addItemToCart(product));
    }

    return (
        <div>
            {productsNotification && productsNotification.status !== "success" ? <Notification {...productsNotification} /> : null}
            {productsNotification && productsNotification.status === "success" ?
                <section className={classes.productDetail}>
                    <div className={classes.col}>
                        <div className={classes.imageWrapper}>
                            <img className={classes.productImage} src={product.image} alt="img1" />
                        </div>
                    </div>
                    <div className={classes.col}>
                        <p className={classes.category}>{product.category}</p>
                        <p className={classes.productTitle}>{product.title}</p>
                        <p className={classes.productRating}>Rating: {product.rating?.rate}</p>
                        <p className={classes.productPrice}>&#8377; {product.price}</p>
                        <p className={classes.productDescription}>{product.description}</p>
                        <div className={classes.btnContainer}>
                            <button onClick={addToCardHandler} type="button" class="btn btn-outline-dark me-2">Add to Cart</button>
                            <Link to="/cart" className="btn btn-outline-dark">Go to Cart</Link>
                        </div>
                    </div>
                </section> :
                null}
        </div>
    )
}

export default Product