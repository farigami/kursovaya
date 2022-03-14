import React from "react";
import './header.css'
import logo from './image/pizza.png'

const Header = (items) => {
    console.log(items)
    return (
        <>
        <div className="header">
            <a 
                href="/" 
                className="logo">
                <img src={logo} alt=''/>Just <span>  Pizza</span>
            </a>   
            <li className="about"><a href="/">О нас</a></li>
            <li className="basket">
            <a 
                href="/basket"
                >Корзина 
                { items.basket.length < 10 ? <span>{items.basket.length}</span> : 
                alert('Ало свинья куда тебе столько')}
            </a></li> 
        </div>
        </>
    )
}

export default Header