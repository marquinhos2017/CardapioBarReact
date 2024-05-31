import styled from "styled-components";

export const CartContainer = styled.div`
max-width:100%;
h2{
    color: #016d82;
}


padding:24px;


position: fixed;
    top: 0;
    left: 840px;
    width: 100%;
    height: 100vh; /* Ocupa toda a altura da viewport */
    overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
    z-index: 0; /* Define a ordem de sobreposição do container de compras */
`