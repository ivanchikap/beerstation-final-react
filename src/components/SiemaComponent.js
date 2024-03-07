import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from "react-responsive-carousel";
import CardImg from "./CardImg";
import React from "react";
const SiemaComponent = ({images, imgPreview, isInShop, isInShopText, discountText, discount}) => {
    const imagesTemp = images.map((image) => (
        <CardImg key={image.src} src={image.src} isInShop={isInShop} isInShopText={isInShopText} discountText={discountText} discount={discount} divClass='modal__img'/>
    ))
    return (
        <Carousel showThumbs={false}>
            {imagesTemp}
        </Carousel>
    );
};

export default SiemaComponent;