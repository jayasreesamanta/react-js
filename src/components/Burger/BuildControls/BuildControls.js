import React from 'react';
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildCntrols = (props) => (
    <div className = {Classes.BuildControls}>
        <p>Total price : <strong>{props.price.toFixed(2)}</strong></p>
        {control.map(ctrl=>(
            <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label} 
                added = {() => props.ingredientsAdded(ctrl.type)}
                removed = {() => props.ingredientsDeleted(ctrl.type)}
                disabled = {props.disable[ctrl.type]}
            />
        ))}
        <button 
            className={Classes.OrderButton}
            disabled={!props.purchaseable}
            onClick= {props.ordered}>ORDER NOW</button>
    </div>
    
)
    
export default buildCntrols;