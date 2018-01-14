import React, { Component } from "react";
import './Cart.css';
import props from './../../Organization/Row/organization-row';

class Cart extends Component {
    render() {

        const items = this.props.cartarray.map((step) => { 
            return (
               <li> Item: {step.title}......Price: {step.author}.....<button className="delete" onClick={() => this.props.onClick(step)}>
              Remove
             </button> </li> 
            );
    
    });

    return (
       
        <div className='cart'>
            <p className='cart-p'></p>
            <h4> Cart Item Count: {this.props.cartItem}......Cart Amount : {this.props.cartAmount}.... Below are Cart Items</h4>
            {items}
        </div>
       
    );
}
}


export default Cart;