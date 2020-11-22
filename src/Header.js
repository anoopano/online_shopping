import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="amazon logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="search"></input>
                <AiOutlineSearch className="header__searchIcon" />
            </div>

            <div className="header__navigation">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Anoop</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <AiOutlineShoppingCart className="header__basketIcon" />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
