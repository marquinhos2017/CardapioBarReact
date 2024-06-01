import React from 'react';
import { CartContainer, CartItem, Separator, Total, DeleteButton } from './styles';

interface CartProps {
    cart: { id: number; name: string; price: number }[];
    isFixed: boolean;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, isFixed, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const VALORTOTAL = 50;

    return (
        <CartContainer isFixed={isFixed}>
            <h2>Carrinho</h2>
            {cart.map((item, index) => (
                <React.Fragment key={index}>
                    <CartItem>
                        <span>{item.name}</span>
                        <div>
                            <span>€{item.price.toFixed(2)}</span>
                            <DeleteButton onClick={() => removeFromCart(item.id)}>x</DeleteButton>
                        </div>
                    </CartItem>
                    <Separator />
                </React.Fragment>
            ))}
            <Total>Total: €{total.toFixed(2)}</Total>
            {total > VALORTOTAL && <p style={{ color: 'red' }}>Total excede €50!</p>}
        </CartContainer>
    );
};

export default Cart;
