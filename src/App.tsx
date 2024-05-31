import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { ContainerItems } from './styles';
import PasteldeNata from "./assets/pastel_nata_80_ref155070 copy 27.png"
import Sumo from "./assets/Frame 1.png"

interface Item {
  id: number;
  name: string;
  price: number;
  img: string
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const items: Item[] = [
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
  ];

  const addToCart = (item: Item) => {
    console.log("Total no carrinho antes de clicar: " + cart.reduce((sum, item) => sum + item.price, 0));
    console.log("Valor Item clicado: " + item.price);
    setCart(prevCart => {

      const simulacao = cart.reduce((sum, item) => sum + item.price, 0) + item.price;

      if (simulacao > 2.40) {
        alert('Total excede R$2,40!');


      } else {
        console.log("Item adicionado");

        const updatedCart = [...prevCart, item];
        console.log("Total no carrinho agora: " + updatedCart.reduce((sum, item) => sum + item.price, 0)); return updatedCart;

      } return cart

    });
  };

  return (
    <ContainerItems>

      <Menu items={items} addToCart={addToCart} />
      <Cart cart={cart} />
    </ContainerItems>
  );
}

export default App;
