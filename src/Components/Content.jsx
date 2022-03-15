import React from "react";
import data from './data/items.json'
import './content.css'


import Card from "./Card/Card";

const Content = () => {
    return (
        <>
        <div className="content">
            {data.map(item => (    
                <Card key={item.title} item={item}/>
            ))}
        </div>
        </>
    )
}


export default Content