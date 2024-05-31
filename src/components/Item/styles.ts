import styled from "styled-components";

export const ContainerItem = styled.div`

    max-width:100%;
    display: flex;

    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; 
    padding:24px;

    //border:1px solid black;
    border-radius: 20px;
/* box-shadow */
 box-shadow: rgba(0,0,0,0.2) 0 0 24px;

 @media only screen and (min-width: 768px) and (max-width: 1280px) {
    box-shadow: rgba(0,0,0,0.1) 0 0 24px;
  
 }




`

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


    @media only screen and (min-width: 768px) and (max-width: 1280px) {
        margin-bottom:0px;
        height:200px;
      
     }
    
`

export const Information = styled.div`
    display:flex;
    justify-content: space-between; /* Centraliza horizontalmente */
    align-items: center; 
    

    p{
        font-size:16px;
        margin:0;
        color:black;
    }

    span{
        font-weight:bold;
        color:black;
        margin: 0;
    }
`


export const ButtonContainer = styled.button`
background-color: white;
border:none;
`