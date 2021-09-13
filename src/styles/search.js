import styled from 'styled-components';

export const DivSearch = styled.div`
   display: flex;
   width: 40%;
   padding: 10px ;
   border-radius: 8px;
   background-color: ${({theme}) => theme.card};
   flex-direction: row;
   box-shadow: 1px 1px 1px 1px ${({theme}) => theme.shadow};

   @media( max-width: 1000px){
      width: 60%;
   }
   @media( max-width:700px){
      width: 90%;
   }

   & svg{
      color: #0075fe;
      width: 20px;
      height: 20px;
   }
   & > form {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction:row;
      justify-content: space-between;
   }
`;

export const InputSearch = styled.input`
   border: none;
   background-color: transparent;
   outline: none;
   color: ${({theme}) => theme.title};
   margin-left: 5px;
   font-size:1rem;
`;

export const BtnSearch = styled.button`
   background-color: #0075fe;
   justify-self: flex-end;
   color: #f5f8ff;
   border: none;
   padding: 10px;
   font-weight: 600;
   border-radius: 8px;
   cursor: pointer;

`;


