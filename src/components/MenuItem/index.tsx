import React from 'react';

interface MenuItemProps {
    item: {
        id: number;
        name: string;
        price: number;
    };
    addToCart: (item: { id: number; name: string; price: number }) => void;
    removeFromCart: (item: { id: number }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToCart }) => {
    return (
        <div className="menu-item">
            <h3>{item.name}</h3>
            <p>Preço: R${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
        </div>
    );
};

export default MenuItem;
