import React from 'react';
import MenuItem from '../Item';
import { ContainerItems } from './styles';



interface MenuProps {
    items: { id: number; name: string; price: number; img: string }[];
    addToCart: (item: { id: number; name: string; price: number; img: string }) => void;

}

const Menu: React.FC<MenuProps> = ({ items, addToCart }) => {

    return (
        <ContainerItems>
            {items.map(item => (
                <MenuItem key={item.id} item={item} addToCart={addToCart} />
            ))}
        </ContainerItems>
    );
};

export default Menu;
