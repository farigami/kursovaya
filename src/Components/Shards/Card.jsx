import React from "react";
import "./card.css"

const Card = (arg) => {
    return(
    <div key={arg.index} className="card">
        <img className="poster" src={arg.item.poster} alt="" />
        <hr />
        <h1 className="title">{arg.item.title}</h1>
        <h3 className="description">{arg.item.description}</h3>
        <div className="tools"><span>Цена: {arg.item.price}₽ </span>
            <button onClick={() => arg.handleAddProduct(arg.item)}>Добавить</button>
        </div>
    </div>
    )
}

export default Card