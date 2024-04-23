import React, {useEffect, useState} from "react";
import Modal from "../components/Modal";
import SiemaComponent from "../components/SiemaComponent";
import CardPrice from "../components/CardPrice";
import CardTestimonial from "../components/CardTestimonial";
import {useLocation, useNavigate} from "react-router-dom";


const ProductModalPage = () => {
    const [modal, setModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const prod = location.state.product;

    useEffect(() => {
        setModal(true);
    }, [])

    useEffect(() => {
        if (modal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [modal])

    const closeHandler = () => {
        setModal(false);
        navigate(-1);
    }
    //if desc is Array
    // let descriptionTemplate = prod.desc.reduce((acc, paragraph) => {
    //     acc += `${paragraph}`
    //     return acc;
    // }, '');


    let descriptionTemplate = Array.isArray(prod.desc) ? (prod.desc.reduce((acc, paragraph) => {
        acc += `${paragraph}`
        return acc;
    }, '')) : prod.desc


    return (
        <div>
            {modal && <Modal close={() => closeHandler()}>
                <svg className="modal__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     onClick={closeHandler}>
                    <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                </svg>
                <div className="modal__left">
                    <SiemaComponent images={prod?.modalImages} isInShop={prod.isInShop} isInShopText={prod.isInShopText}
                                    discountText={prod.discountText} discount={prod.discount}/>
                </div>

                <div className="modal__right">
                    <h2 className="modal__title">{prod.title}</h2>
                    <h3 className="modal__beertype">{prod.subtitle}</h3>

                    <div className="modal__price-wrapper">
                        <CardPrice metering={prod.metering} discountType={prod.discountType} price={prod.price}
                                   discountedPrice={prod.discountedPrice}
                        />
                        <button className="btn btn--default">Придбати</button>
                    </div>

                    <CardTestimonial type={prod.type} alcohol={prod.alcohol} bitterness={prod.bitterness}
                                     density={prod.density}/>
                    <div className="modal__description">
                        {descriptionTemplate}
                    </div>
                </div>
            </Modal>}
        </div>
    );
};

export default ProductModalPage;