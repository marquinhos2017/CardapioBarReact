import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { ContainerItems } from './styles';
import PasteldeNata from "./assets/pastel_nata_80_ref155070 copy 27.png"
import Sumo from "./assets/Frame 1.png"
import Iorgut from "./assets/novo-logo_imagens-iogurtes-líquidos_aromas-morango.png"

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
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: Iorgut },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Iorgurt', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: Iorgut },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: Iorgut },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: Iorgut },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Pastel de Nata 2', price: 2.00, img: PasteldeNata },
  ];

  const addToCart = (newItem: Item) => {
    const currentTotal = cart.reduce((sum, item) => sum + item.price, 0);
    const newTotal = currentTotal + newItem.price;

    console.log("Total no carrinho antes de clicar: " + currentTotal);
    console.log("Valor Item clicado: " + newItem.price);

    if (newTotal > 2.40) {
      alert('Total excede R$2,40!');
    } else {
      setCart(prevCart => {
        const updatedCart = [...prevCart, newItem];
        console.log("Item adicionado");
        console.log("Total no carrinho agora: " + updatedCart.reduce((sum, item) => sum + item.price, 0));
        return updatedCart;
      });
    }
  };

  return (
    <ContainerItems>

      <Menu items={items} addToCart={addToCart} />
      <Cart cart={cart} />

    </ContainerItems>
  );
}

export default App;
