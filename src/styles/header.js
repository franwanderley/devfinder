import styled from 'styled-components';

export const Title = styled.h1`
   color: ${({theme}) => theme.title};
   font-size: 1.5rem;
   font-weight: 600;
`;

export const DivHeader = styled.div`
   width: 40%;
   margin-bottom: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   @media( max-width: 1000px){
      width: 60%;
   }
   @media( max-width:700px){
      width: 90%;
   }
`;

export const BtnTheme = styled.button`
   color: ${({theme}) => theme.title};
   font-size: 1rem;
   border: none;
   cursor: pointer;
   background-color: transparent;
`;