import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb'
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        cartBtn={handleCartBtn}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;