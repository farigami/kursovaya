import React from "react";
import data from './data/items.json'
import './content.css'


import Card from "./Card/Card";

const Content = () => {
    return (
        <>
            {data.map((item, key) => (
                <Card key={key} item={item} />
            ))}
        </>
    )
}


export default Content