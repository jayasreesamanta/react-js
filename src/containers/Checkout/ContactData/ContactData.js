import React, { Component } from 'react';
import Classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import Button from '../../../components/UI/Button/Button';
class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading : false
    }
    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({loading : true});
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            coustomer : {
                name : 'Jayasree Samanta',
                address : {
                    street : 'Amritlal road',
                    zipCode : 743133,
                    country : 'India'
                },
                email : 'jayasreesamanta1990@gmail.com'
            },
            deliveryMethod : 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading : false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading : false});
            });
    }
render(){
    let form = (
        <form>
            <Input  inputtype="input"  type="text" name="name" placeholder="Enter your Name" />
            <Input  inputtype="input" type="email" name="email" placeholder="Enter your Email" />
            <Input  inputtype="input" type="text" name="street" placeholder="Enter Street name" />
            <Input  inputtype="input" type="text" name="npostalame" placeholder="Enter your Postal code" />
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
    );
    if(this.state.loading){
        form = <Spinner/>
    }
    return(
        <div className={Classes.ContactData}>
            <h4>Enter your contact data!</h4>
            {form}
        </div>
    );
}
}
export default ContactData;