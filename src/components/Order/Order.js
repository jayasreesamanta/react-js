import React from 'react';
import Classes from './Order.module.css';
const order = (props) => {
    const ingerdients = [];
    for(let ingerdientName in props.ingredients){
        ingerdients.push({
           name : ingerdientName,
           amount : props.ingredients[ingerdientName] 
        });
    }
    console.log(props.ingredients);
    const ingerdientOutput = ingerdients.map(ig => {
    return <span 
        style = {{
            textTransform: 'capitalize',
            display: "inline-block",
            margin: '0 8px',
            border: '1px solid black',
            padding: '5px'
        }}>{ig.name} ({ig.amount})</span>
    });
    return(
        <div className={Classes.Order}>
            <p>Ingerdients : {ingerdientOutput}</p>
            <p>Price : <strong>{props.price}</strong></p>
        </div>
    );
};
export default order;