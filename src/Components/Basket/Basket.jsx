import React from "react";
import './basket.css'
import { connect } from "react-redux";
import emptyBasket from "../image/emptyBasket.svg";

const Basket = ({ items, total }) => {
    return (
        <>
            <div className="basket-section">
                {items.length ?
                    <>
                        <div className="basket-items">
                            {items.map(item => {
                                return (

                                    <div key={item.id} className="item-section">
                                        <div className="item-main">
                                            <div className="item-icon"><img src={item.poster} alt="" /></div>
                                            <div className="item-title">{item.title}</div>
                                        </div>
                                        <div className="item-data">
                                            <div className="item-quanity">Кол-во: {item.quantity}</div>
                                            <div className="item-price">{item.price}₽</div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <div className="offer-form">
                            <input type="text" placeholder="Имя" />
                            <input type="number" placeholder="Номер телефона" />
                            <input type="text" placeholder="Комментарий" />
                            <div className="total-price">Всего к оплате: {total} ₽</div>
                            <button>Оформить Заказ</button>
                        </div>
                    </>
                    :
                    <div className="empty-basket">
                        <img src={emptyBasket} alt="" />
                        <p></p>
                        <h1>Корзина пуста</h1>
                        <p></p>
                        <h2>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</h2>
                    </div>}
            </div>
        </>
    )
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

export default connect(mapStateToProps)(Basket)