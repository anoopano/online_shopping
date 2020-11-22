import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    

    return (
        <div className="home">
            <img className="home__image" alt="amazon"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            />
            <div className="home__products">
                <Product
                    id="1"
                    title="Cracking the coding interview"
                    image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
                    price={25}
                    rating={5}
                />
                <Product
                    id="2"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
                    price={15}
                    rating={5}
                />
            </div>
            <div className="home__products">
                <Product
                    id="3"
                    title="The ultra face sheild"
                    image="https://images-na.ssl-images-amazon.com/images/I/71e6u1kQdDL._SL1500_.jpg"
                    price={5}
                    rating={4}
                />
                <Product
                    id="4"
                    title="The ultra stereo helmet"
                    image="https://images-na.ssl-images-amazon.com/images/I/51ILIabdi3L.jpg"
                    price={100}
                    rating={5}
                />
                <Product
                    id="5"
                    title="Panasonic new washing machine"
                    image="https://images-na.ssl-images-amazon.com/images/I/71%2BJK-QC68L._SL1500_.jpg"
                    price={100}
                    rating={3}
                />
            </div>
            <div className="home__products">

                <Product
                    id="15"
                    title="New Apple iPhone 11 (64GB) - Black"
                    image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                    price={845}
                    rating={4}
                />
                <Product
                    id="16"
                    title="Elica 60 cm 880 m3/hr Chimney (Strip CF 60 NERO, 2 Cassette Filters, Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/71qmN9GokRL._SL1500_.jpg"
                    price={135}
                    rating={5}
                />
            </div>

        </div>
    )
}

export default Home

