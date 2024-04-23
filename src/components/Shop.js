import React, {useContext} from 'react'
import {ShopContext} from "../context/ShopContext";
import {useNavigate} from "react-router-dom";

const Shop = () => {
    const {setShop, shops} = useContext(ShopContext)
    const navigate = useNavigate()

    const selectHandler = (e) => {
        setShop(e.target.value)
        navigate('/')
    }

    return (
        <div className='shop'>
            <select onChange={selectHandler} name="select" className='shop__select'>
                {shops.map((opt) => <option key={opt.id} value={opt.name}>{opt.address}</option>)}
            </select>
        </div>
    );
};

export default Shop;