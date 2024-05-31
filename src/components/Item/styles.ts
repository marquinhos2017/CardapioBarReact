import styled from "styled-components";

export const ContainerItem = styled.div`

    max-width:100%;
    display: flex;

    justify-content: center; /* Centraliza horizontalmente */

    padding:24px;

    //border:1px solid black;
    border-radius: 24px;
/* box-shadow */
 box-shadow: rgba(0,0,0,0.1) 0 0 24px;






`

export const ContainerImg = styled.div`
//border:1px solid green;
display:flex;
justify-content: center; /* Centraliza horizontalmente */
align-items: center; 



width:100%;
height:200px;   




    img{
        
        
        width:140px;
      
        height: 200px;
        object-fit: contain;
  
 

        
        
    }

    margin-bottom:32px;


    @media only screen and (min-width: 768px) and (max-width: 1280px) {
        margin-bottom:0px;
       
      
     }
    
`

export const Information = styled.div`
height:24px;
margin-top: 16px;
    display:flex;
    justify-content: space-between; /* Centraliza horizontalmente */
    align-items: center; 
    width:100%;
    

    h3{
        text-align:left;
        width:60px;
        font-size:16px;
        margin:0;
        color:black;
        padding:0;
    }

    span{

        font-weight:bold;
        font-size:16px;
        color:#9bbec4;
        
        padding:0;
    }
`


export const ButtonContainer = styled.button`
background-color: white;
border:none;
`