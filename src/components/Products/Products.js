import React, { useEffect, useState } from 'react';
import classes from "./Products.module.css";
import { Link } from 'react-router-dom';
import { fetchProductsData, productsActions } from "../../store/products-slice";
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../Notification/Notification';


function Products() {
    // const [products, setProducts] = useState([]);
    const productsNotification = useSelector((state) => state.products.notification);
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.items)
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //         setProducts(json);
        //     }
        //     )
        dispatch(fetchProductsData());
        return () => dispatch(productsActions.clearProductsData())
    }, [])

    return (
        <div>
            {productsNotification && productsNotification.status !== "success" ? <Notification {...productsNotification} /> : null}
            {productsNotification && productsNotification.status === "success" ?
                <div>
                    <h1 style={{ textAlign: 'center' }}>Latest Products</h1>
                    <hr />
                    <div style={{ textAlign: 'center', margin: "50px" }}>
                        <button type="button" className="btn btn-outline-dark me-2">All</button>
                        <button type="button" className="btn btn-outline-dark me-2">Men</button>
                        <button type="button" className="btn btn-outline-dark me-2">Women</button>
                        <button type="button" className="btn btn-outline-dark me-2">Jewelery</button>
                        <button type="button" className="btn btn-outline-dark">Electronics</button>
                    </div>
                    <div>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {productsData.length !== 0 && productsData.map((item, index) => {
                                return <div className="col">
                                    <Link style={{ textDecoration: "none" }} to={`${item.id}`}>
                                        <div className="card h-100">
                                            <img className={classes.cardImg} src={item.image} alt="img1" />
                                            <div className="card-body">
                                                <h6 style={{ textAlign: 'center' }} className={`card-title ${classes.ellipsis}`}>{item.title}</h6>
                                                <h6 style={{ textAlign: 'center' }} className="card-text">&#8377;{item.price}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}

export default Products