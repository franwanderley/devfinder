import styled from 'styled-components';

export const DivHome = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const DivUserMobile = styled.div`
   display: none;
   & h3{
      margin: 0;
   }
   & img{
      width: 79px;
      height: 79px;
      border-radius:56px;
   }
   & > div{
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content:center;
   }

   @media(max-width: 700px){
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
   }
`;
 
export const Time = styled.p`
   @media(max-width: 700px){
      display: none;
   }
`;

export const DivCart = styled.div`
   margin-top: 20px;
   display: flex;
   width: 40%;
   padding: 10px;
   border-radius: 8px;
   background-color: ${({theme}) => theme.card};
   flex-direction: row;
   justify-content: space-between;
   font-size: 1rem;
   box-shadow: 1px 1px 1px 1px ${({theme}) => theme.shadow};

   & img{
      width: 112px;
      height: 112px;
      border-radius:66px;
   }
   & h3{
      font-size: .8rem;
      font-weight: 600;
      color: ${({theme}) => theme.title};
   }
   & p{
      font-size: .6rem;
      color: ${({theme}) => theme.title};
   }

   @media( max-width: 1000px){
      width: 60%;
   }
   @media( max-width: 700px){
      width: 90%;
      
      & > img{
         display: none;
      }
      & h3{
         font-size: 1rem;
      }
      & p{
         font-size: .8rem;
      }
   }
`;


export const DivInfo = styled.div`
   display: flex;
   width: 100%;
   margin-left: 10px;
   padding: 10px 5px;
   flex-direction: column;

   & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }
   `;

export const DivUser = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
    & h3{
       margin: 0;
    }
    & p{
      color: #0075fe !important;
      margin-top: 5px;
    }
    @media(max-width: 700px){
       display: none;
    }
`;

export const DivRepo = styled.div`
   display: flex;
   background-color: ${({theme}) => theme.background};
   flex-direction: row;
   padding: 0 10px;
   border-radius: 8px;
   justify-content: space-between;

   & div {
      display: flex;
      align-items: center;
      flex-direction: column;
   }
`;

export const DivInfoMore = styled.div`
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   align-items:center;
   justify-content: space-between;
   color: ${({theme}) => theme.title};
   
   & div{
      align-items:center;
      display: flex;
      flex-direction:row;
      justify-content: space-evenly;      
   }
   & svg{
      margin-right: 5px;
      width: 15px;
      height: 15px;
   }

`;