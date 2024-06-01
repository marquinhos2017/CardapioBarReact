import React from 'react';
import { CartContainer, CartItem, Separator, Total } from './styles';

interface CartProps {
    cart: { id: number; name: string; price: number }[];
    isFixed: boolean;
}

const Cart: React.FC<CartProps> = ({ cart, isFixed }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);


    return (
        <>
            <CartContainer isFixed={isFixed}>
                <h2>Carrinho</h2>
                {cart.map((item, index) => (
                    <><CartItem key={index}>
                        <span>{item.name}</span>
                        <span>€{item.price.toFixed(2)}</span>
                    </CartItem><Separator /></>
                ))}
                <Total> Total: €{total.toFixed(2)}</Total>
                {total > 2.40 && <p style={{ color: 'red' }}>Total excede €2,40!</p>}
            </CartContainer></>
    );
};

export default Cart;
