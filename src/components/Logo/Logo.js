import React from 'react';
import burgerLogo from '../../Assets/images/burger-logo.png';
import Classes from './Logo.module.css';
const logo = (props) => (
    <div className={Classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} />
    </div>
);
export default logo;