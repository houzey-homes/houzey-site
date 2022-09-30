import React from 'react';
import '../Styles/main.css';
import { useState } from 'react';


export default function ShoppingCart(props){
    const {cartItems} = props;
    return (
        <aside>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
                <h3>{props.items}</h3>
            </div>            
        </aside>
    );
}
