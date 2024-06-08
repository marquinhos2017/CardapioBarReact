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
import cafe from "../src/assets/cafe.avif"
import abatanado from "../src/assets/abatanado.avif"
import copodeleite from "../src/assets/copodeleite.webp"
import galao from "../src/assets/galao.png"
import garoto from "../src/assets/garoto.jpeg"
import meiadeleite from "../src/assets/meiadeleite.png"
import ucal from "../src/assets/Ucal.jpeg"
import gresso from "../src/assets/gresso.jpeg"
import leitemeiogordo from "../src/assets/leitemeiogordo.jpeg"
import aguadaspedras from "../src/assets/aguadaspedras.jpeg"
import cervejasemalcool from "../src/assets/cervejasemalcool.jpeg"
import sumolaranjanatural from "../src/assets/sumolaranjanatural.jpeg"
import bolodearroz from "../src/assets/bolodearroz.png"
import cafemaisnata from "../src/assets//cafemaisnata.jpeg"
import paocarcaca from "../src/assets//paocarcaca.png"
import paocommanteiga from "../src/assets/paocommanteiga.png"
import sandedequeijo from "../src/assets/sandedequeijo.webp"
import sandefiambre from "../src/assets/sandefiambre.jpeg"
import sandemista from "../src/assets/sandemista.webp"
import sandequeijofresco from "../src/assets/sandequeijofresco.jpeg"
import sandedeovo from "../src/assets/sandedeovo.jpeg"
import sandefrango from "../src/assets/sandefrango.jpeg"
import sandeatum from "../src/assets/sandeatum.jpeg"

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
    { id: 2, name: 'Compal Nectar', price: 1.50, img: Sumo },
    { id: 3, name: 'Ovo Cozido', price: 0.80, img: ovocozido },
    { id: 4, name: 'Iogurt', price: 0.65, img: Iorgut },
    { id: 6, name: 'Agua 0.3L', price: 0.65, img: agua350 },
    { id: 7, name: 'Agua 0.5L', price: 0.80, img: agua500 },
    { id: 5, name: 'Agua 1.5L', price: 1, img: agua1lmeio },

    { id: 8, name: 'Tosta Mista', price: 2.20, img: tostamista },

    { id: 9, name: 'Cafe', price: 0.6, img: cafe },
    { id: 10, name: 'Descafeinado', price: 0.6, img: cafe },
    { id: 13, name: 'Garoto', price: 0.6, img: garoto },
    { id: 10, name: 'Abatanado', price: 0.6, img: abatanado },
    { id: 11, name: 'Copo de Leite', price: 0.6, img: copodeleite },
    { id: 12, name: 'Galao', price: 0.6, img: galao },
    { id: 12, name: 'Meia de Leite', price: 0.6, img: meiadeleite },
    { id: 12, name: 'UCAL', price: 0.6, img: ucal },
    { id: 12, name: 'Gresso', price: 0.6, img: gresso },
    { id: 12, name: 'Leite Meio Gordo', price: 0.6, img: leitemeiogordo },
    { id: 12, name: 'Agua das pedras', price: 0.6, img: aguadaspedras },
    { id: 12, name: 'Cerveja sem Alcool', price: 0.6, img: cervejasemalcool },
    { id: 12, name: 'Sumo Laranja Natural', price: 0.6, img: sumolaranjanatural },
    { id: 12, name: 'Bolo de arroz', price: 0.6, img: bolodearroz },
    { id: 12, name: 'Cafe + Pastel de Nata', price: 0.6, img: cafemaisnata },
    { id: 13, name: 'Pao Carcaca', price: 0.6, img: paocarcaca },
    { id: 13, name: 'Pao com Manteiga', price: 0.6, img: paocommanteiga },
    { id: 13, name: 'Sande de queijo', price: 0.6, img: sandedequeijo },
    { id: 13, name: 'Sande de Fiambre', price: 0.6, img: sandefiambre },
    { id: 13, name: 'Sande Mista', price: 0.6, img: sandemista },
    { id: 13, name: 'Sande Queijo Fresco', price: 0.6, img: sandequeijofresco },
    { id: 13, name: 'Sande de Ovo', price: 0.6, img: sandedeovo },
    { id: 13, name: 'Sande de Frango', price: 0.6, img: sandefrango },
    { id: 13, name: 'Sande de Atum', price: 0.6, img: sandeatum },


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
