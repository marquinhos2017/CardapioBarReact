import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { Container, ContainerItems, Logo } from './styles';
import PasteldeNata from "./assets/pastel_nata_80_ref155070 copy 27.png"
import Sumo from "./assets/Frame 1.png"
import Iorgut from "./assets/novo-logo_imagens-iogurtes-líquidos_aromas-morango.png"
import ovocozido from "../src/assets/ovocozido.avif"
import agua1lmeio from "./assets/50cl-cópia.png"
import logo from "./assets/unnamed.jpg"

interface Item {
  id: number;
  name: string;
  price: number;
  img: string
}



const App: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const fixedPosition = 182; // Altura em que o cart se torna fixo
      setIsFixed(offset >= fixedPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [cart, setCart] = useState<Item[]>([]);
  const items: Item[] = [
    { id: 1, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 2, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 3, name: 'Ovo Cozido', price: 0.80, img: ovocozido },
    { id: 4, name: 'Iogurt', price: 0.65, img: Iorgut },
    { id: 5, name: 'Agua 1.5L', price: 1, img: agua1lmeio },
    { id: 6, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 7, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 8, name: 'Ovo Cozido', price: 0.80, img: ovocozido },
    { id: 9, name: 'Iogurt', price: 0.65, img: Iorgut },
    { id: 10, name: 'Agua 1.5L', price: 1, img: agua1lmeio },
    { id: 11, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 12, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 13, name: 'Ovo Cozido', price: 0.80, img: ovocozido },
    { id: 14, name: 'Iogurt', price: 0.65, img: Iorgut },
    { id: 15, name: 'Agua 1.5L', price: 1, img: agua1lmeio },
    { id: 16, name: 'Pastel de Nata', price: 1.00, img: PasteldeNata },
    { id: 17, name: 'Sumo', price: 1.50, img: Sumo },
    { id: 18, name: 'Ovo Cozido', price: 0.80, img: ovocozido },
    { id: 19, name: 'Iogurt', price: 0.65, img: Iorgut },
    { id: 20, name: 'Agua 1.5L', price: 1, img: agua1lmeio },

  ];

  const addToCart = (newItem: Item) => {
    const currentTotal = cart.reduce((sum, item) => sum + item.price, 0);
    const newTotal = currentTotal + newItem.price;

    console.log("Total no carrinho antes de clicar: " + currentTotal);
    console.log("Valor Item clicado: " + newItem.price);

    if (newTotal > 4.2) {
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
    <>

      <Container>

        <ContainerItems>
          <Logo src={logo} alt="" />
          <Menu items={items} addToCart={addToCart} />
        </ContainerItems>
        <Cart isFixed={isFixed} cart={cart} />
      </Container>
    </>
  );
}

export default App;
