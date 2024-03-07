import React, {useEffect, useState} from "react";
import {toast} from 'react-toastify';
import CardTestimonial from "./CardTestimonial";
import CardPrice from "./CardPrice";
import CardImg from "./CardImg";
import {Link} from "react-router-dom";

const Product = ({prod}) => {
    const [url, setUrl] = useState('');

    const handleShareClick = (e) => {
        const productElement = e.target.closest('.card');
        const searchUrl = window.location.origin + '/products/' + productElement.id
        setUrl(searchUrl);
    }

    useEffect(() => {
        if (url) {
            navigator.clipboard.writeText(url);
            toast.success(`Посилання: ${url} скопійовано до буферу обміну`);
        }

    }, [url])

    return (
        <div className="main__col">
            <div data-name={prod.name} className="card" id={prod.id}>
                <Link state={{product: prod}} to={`/products/${prod.id}`}>
                    <CardImg src={prod.imgPreview} isInShop={prod.isInShop} isInShopText={prod.isInShopText}
                             discountText={prod.discountText} discount={prod.discount}/>
                </Link>
                <div className="card__info">
                    <div className="card__main-info">
                        <div className="card__name">
                            <Link state={{product: prod}} className="card__title" to={`/products/${prod.id}`}>
                                {prod.title}
                            </Link>
                            <p className="card__beertype">{prod.subtitle}</p>
                        </div>
                        <CardTestimonial type={prod.type} alcohol={prod.alcohol} bitterness={prod.bitterness}
                                         density={prod.density}/>
                        <div className="card__price-wrapper">
                            <CardPrice metering={prod.metering} discountType={prod.discountType} price={prod.price}
                                       discountedPrice={prod.discountedPrice}
                            />
                            <div className="card__price-icons">
                                <svg onClick={handleShareClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                                     width="30px" height="30px">
                                    <path
                                        d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path
                                        d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="card__bottom">
                            <Link state={{product: prod}} className="card__details" to={`/products/${prod.id}`}>Детальніше...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;