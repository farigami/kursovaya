import React from "react";
import './basket.css'
import { connect } from "react-redux";


const Basket = ({items, total}) => {
    return (
        <>
        <div className="basket-section">
            {items.map( item => {
                return (
                <div className="item-section">
                    <div className="item-main">
                        <div className="item-icon"><img src={item.poster} alt="" /></div>
                        <div className="item-title">{item.title}</div>
                    </div>
                    <div className="item-description">{item.description}</div>
                    <div className="item-price">{item.price}₽</div>
                </div>
                )}
            )}
            {items.length ? <div className="total-price">Всего к оплате: {total} ₽</div> : <div className="empty-basket">Корзина пуста</div>}
        </div>
        </>
    )
}
const mapStateToProps = ({ cart: { cartItems }}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
  });

export default connect(mapStateToProps)(Basket)