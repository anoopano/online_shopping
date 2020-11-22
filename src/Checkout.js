import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" alt="ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/Auto-clearance-sale_1500x250_71.png"
            />
            {
                basket.length === 0 ? (
                    <div>
                        <h1>Your cart is empty</h1>
                        <p>Search for items to buy, exciting offers are waiting for you!</p>
                    </div>
                ) :
                    <div>
                        <h1>Your cart</h1>
                        {
                            basket.map(item => (
                                <CheckoutProduct id={item.id} image={item.image} title={item.title} rating={item.rating} price={item.price} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Checkout
