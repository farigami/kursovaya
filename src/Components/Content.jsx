import React from "react";
import './content.css'


import Card from "./Shards/Card";

const Content = (items) => {
    console.log(items.basket)
    return (
        <div className="content">
            {items.items.map(item => (    
                <Card key={item.title} item={item} basket={items.basket} handleAddProduct={items.handleAddProduct} />
            ))}
        </div>
    )
}


export default Content