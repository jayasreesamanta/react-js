import React, { Component } from 'react';
import aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer : !prevState.showSideDrawer};
        });
    }
    render() {
        return(
            <aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerHandler}/>
                <SideDrawer
                    open = {this.state.showSideDrawer} 
                    closed = {this.sideDrawerCloseHandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </aux>
        );
    }
}

export default Layout;