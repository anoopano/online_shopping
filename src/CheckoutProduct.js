import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="product"></img>
            <div className="checkoutProduct__info">
                <p>{title}</p>
                <div className="">
                    <span>$</span>{price}
                </div>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, id) =>
                                <AiFillStar key={id} className="checkoutProduct__ratingIcon" />
                            )
                    }
                </div>
                <button onClick={removeFromBasket}>Remove </button>
            </div>
        </div >
    )
}

export default CheckoutProduct
