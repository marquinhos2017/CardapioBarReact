import styled from "styled-components";

interface CartProps {
  isFixed: boolean;
}

export const Total = styled.button`

position: absolute;
top: 520px;

background-color: #006D82;
color:white;
border:none;
padding:12px 24px;
font-size:16px;
font-weight:bold;


`

export const DeleteButton = styled.button`

color:red;
margin-left:8px;


`


export const CartContainer = styled.div<CartProps>`

h2{
    color: #016d82;
}
display:block;

width:220px;

position: absolute;
top: 168px;
left: 820px;
overflow-y: auto;
z-index: 0;
height:100vh;

@media only screen and (min-width: 1200px) {
  h2{
    color: #016d82;
}
display:block;

width:150px;

position: absolute;
top: 168px;
left: 1200px;
overflow-y: auto;
z-index: 0;
height:100vh;
}

${Total}{

overflow-y: auto;


    position: fixed;
    top: 664px;



    overflow-y: auto;
    z-index: 1000;
    display:flex;
    justify-content:center;
    align-items:center;
    width:150px;
    text-align: center;
}

  

  ${(props) => props.isFixed && `



position: absolute;
top: 168px;
left: 820px;
overflow-y: auto;


    position: fixed;
    top: 0;



    overflow-y: auto;
    z-index: 0; /* Para garantir que o carrinho fique no topo */
  `}

  
`

export const CartItem = styled.div`

display: flex;
  justify-content: space-between;

  margin:0;
  padding:0;
  align-items:center;

  span{
    font-size:12px;
  }
  
  `

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 8px 0; // Espaçamento acima e abaixo da linha
`


