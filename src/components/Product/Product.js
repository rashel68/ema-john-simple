import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div className="productImg">
                <img src={img} alt="" />
            </div>
            <div className="productDetails">
                <h4>{name}</h4>
                <p><small>by <b>{seller}</b></small></p>
                <p>Price: {price}</p>
                <p><small>Only{stock} left in stock - order soon</small></p>
                <button onClick={() => props.cartBtn(props.product)}>{cartIcon} add to cart</button>
            </div>

        </div>
    );
};

export default Product;