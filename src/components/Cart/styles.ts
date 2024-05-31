import styled from "styled-components";

interface CartProps {
    isFixed: boolean;
}

export const CartContainer = styled.div<CartProps>`
max-width:100%;
h2{
    color: #016d82;
}








  
  position: absolute;
  top: 168px;
  left: 820px;
  overflow-y: auto;
  z-index: 0;

  ${(props) => props.isFixed && `
    position: fixed;
    top: 0;
    right: 0;


    overflow-y: auto;
    z-index: 1000; /* Para garantir que o carrinho fique no topo */
  `}
`