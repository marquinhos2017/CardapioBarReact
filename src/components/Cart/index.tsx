import React from 'react';
import { CartContainer } from './styles';

interface CartProps {
    cart: { id: number; name: string; price: number }[];
    isFixed: boolean;
}

const Cart: React.FC<CartProps> = ({ cart, isFixed }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);


    return (
        <CartContainer isFixed={isFixed}>
            <h2>Carrinho</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name} - R${item.price.toFixed(2)}</p>
                </div>
            ))}
            <h3>Total: R${total.toFixed(2)}</h3>
            {total > 2.40 && <p style={{ color: 'red' }}>Total excede R$2,40!</p>}
        </CartContainer>
    );
};

export default Cart;
