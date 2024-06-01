import { styled } from "styled-components";

export const ContainerItems = styled.div`
display:block;
padding:64px;


@media only screen and (min-width: 768px) and (max-width: 1280px) {
    padding:0px 32px ;
  
 }


@media only screen and (min-width: 1200px) {
    padding:12px 48px ;
   
  }
   
    
`

export const Logo = styled.img`
width:86px;
margin:0 auto 48px;
padding:24px;
display:flex;
justify-content:center;
align-items:center;

@media only screen and (min-width: 1200px) {
    width:124px;
    margin:0 auto 0px;
    padding:24px;
    display:flex;
    justify-content:center;
    align-items:center;
   
  }

`

export const Container = styled.div`
display:flex;
width:100%;
margin:0;
padding:0;
`