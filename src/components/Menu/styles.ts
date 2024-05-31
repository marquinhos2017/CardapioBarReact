import styled from "styled-components";



export const ContainerImg = styled.div`
//border:1px solid green;
display:flex;
justify-content: center; /* Centraliza horizontalmente */
align-items: center; 



   
    max-width:100%;
    height:200px;

    img{
        
        
        max-width:100%;
        max-height:100%;
        
    }

    margin-bottom:32px;


   
`

export const Information = styled.div`

    display:flex;
    justify-content: space-between; /* Centraliza horizontalmente */
    align-items: center; 

    p{
        font-size:16px;
        margin:0;
    }

    span{
        font-weight:bold;
    }
`


export const ContainerItems = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding:0px;
    grid-column-gap: 42px;
    grid-row-gap: 42px;
    margin-right:24px;

    @media only screen and (min-width: 768px) and (max-width: 1280px) {
        grid-row-gap: 24px;
        grid-column-gap: 4px;
      
     }
    
`