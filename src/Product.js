import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, rating, price, image }) {

    const [basket, dispatch] = useStateValue();
    const addItemToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <h4>$</h4>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, id) =>
                                <AiFillStar key={id} className="product__ratingIcon" />
                            )
                    }
                </div>
            </div>
            <img src={image} alt="products" />
            <button onClick={addItemToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
