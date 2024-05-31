import PasteldeNata from "../../assets/pastel_nata_80_ref155070 copy 27.png"
import Sumo from "../../assets/Frame 1.png"
import { ContainerImg, ContainerItem, Information } from "./styles"

import React from 'react';

interface MenuItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        img: string;
    };
    addToCart: (item: { id: number; name: string; price: number; img: string }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToCart }) => {
    return (
        <ContainerItem>
            <div>
                <ContainerImg>

                    <img src={item.img} alt="" />
                </ContainerImg>
                <Information>
                    <p>{item.name}</p>
                    <span>R${item.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
                </Information>
            </div>
        </ContainerItem>
    );
};

export default MenuItem;



export const Item = () => {
    return (
        <ContainerItem>
            <div>
                <ContainerImg>
                    <img src={PasteldeNata} alt="" />
                </ContainerImg>
                <Information>
                    <p>a</p>
                    <span>R$ 2</span>
                    <button >Adicionar ao carrinho</button>
                </Information>
            </div>
        </ContainerItem>
    )
}


export const Item2 = () => {
    return (
        <ContainerItem>
            <div>
                <ContainerImg>
                    <img src={Sumo} alt="" />
                </ContainerImg>
                <Information>
                    <p>PASTEL DE NATA</p>
                    <span>$1,15</span>
                </Information>
            </div>
        </ContainerItem>
    )
}

