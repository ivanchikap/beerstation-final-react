import React, {useContext, useRef} from 'react'
import {ShopContext} from "../context/ShopContext";
import {useNavigate} from "react-router-dom";

const Shop = () => {
    const {shop, setShop} = useContext(ShopContext)
    const navigate = useNavigate()
    const options = [
        {value: 'shopTeteriv', label: 'Магазин в с.Пісківка'},
        {value: 'shopMygalki', label: 'Магазин в с.Мигалки'},
    ]

    const selectHandler = (e) => {
        setShop(e.target.value)
        navigate('/')
    }

    return (
        <div className='shop'>
            <select onChange={selectHandler} name="select" className='shop__select'>
                {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>
    );
};

export default Shop;