import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      padding : 0;
      box-sizing: border-box;
   }

   body { 
      max-width: 100vw;
   }

   @media(max-width : 1080px){
      html{
         font-size : 93.75%;
      }
   }
   @media(max-width: 720px){
      html{
         font-size: 87.5%;
      }
   }


   button{
      cursor: pointer;
   }

   a{
      text-decoration: none;
      color : inherit; /* Vai pegar do component pai */
   }
`;