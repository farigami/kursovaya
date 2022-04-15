import React from "react";
import { connect } from "react-redux";

import addItem from '../../redux/cart/cart.actions'

import "./card.css"

const Card = ({ item, addItem }) => {
    return (
        <div key={item.index} className="card">
            <img className="poster" src={item.poster} alt="" />
            <hr />
            <h1 className="title">{item.title}</h1>
            <h3 className="description">{item.description}</h3>
            <div className="tools"><span>Цена: {item.price} ₽ </span>
                <button onClick={() => addItem(item)}>Добавить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card)