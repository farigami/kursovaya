import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css'
import logo from './image/pizza.png'

const Header = (itemsCount) => {
    return (
        <>
            <div className="header">
                <Link
                    to="/"
                    className="logo">
                    <img src={logo} alt='' />Just <span id="pizza">  Pizza</span>
                </Link>
                <li className="about"><Link to="/about">О нас</Link></li>
                <li className="basket">
                    <Link
                        to="/basket"
                    >Корзина
                        <span>{itemsCount.itemsCount}</span>
                    </Link></li>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});

export default connect(mapStateToProps)(Header)