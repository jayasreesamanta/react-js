import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import navigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) =>(
    <header className = {Classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height = "80%"/>
        <nav className={Classes.DextopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);
export default toolbar;