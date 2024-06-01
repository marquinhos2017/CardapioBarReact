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
import agua350 from "./assets/001032682.webp"
import agua500 from "./assets/penacova-agua-05l.png"
import tostamista from "./assets/tosta-presunto (1).png"

interface Item {
  id: number;
  name: string;
  price: number;
  img: string
}



const App: React.FC = () => {
  const VALORTOTAL = 50;
  const [isFixed, setIsFixed] = useState(false);
  const [itemIdCounter, setItemIdCounter] = useState(1); // Contador para IDs únicos

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const fixedPosition = 173; // Altura em que o cart se torna fixo
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
    { id: 6, name: 'Agua 0.3L', price: 0.65, img: agua350 },
    { id: 7, name: 'Agua 0.5L', price: 0.80, img: agua500 },
    { id: 5, name: 'Agua 1.5L', price: 1, img: agua1lmeio },

    { id: 8, name: 'Tosta Mista', price: 2.20, img: tostamista },
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

    if (newTotal > VALORTOTAL) {
      alert('Total excede R$2,40!');
    } else {
      setCart(prevCart => {
        const updatedCart = [...prevCart, { ...newItem, id: itemIdCounter }];
        setItemIdCounter(prevId => prevId + 1); // Incrementa o contador de IDs
        console.log("Item adicionado");
        console.log("Total no carrinho agora: " + updatedCart.reduce((sum, item) => sum + item.price, 0));
        return updatedCart;
      });
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };



  return (
    <>
      <Logo src={logo} alt="" />
      <Container>

        <ContainerItems>

          <Menu items={items} addToCart={addToCart} />
        </ContainerItems>
        <Cart isFixed={isFixed} cart={cart} removeFromCart={removeFromCart} />
      </Container>
    </>
  );
}

export default App;
