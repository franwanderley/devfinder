import { useContext } from "react";
import { BtnTheme, DivHeader, Title } from "../styles/header";
import { ThemeContext } from "styled-components";
import { FaMoon, FaSun } from 'react-icons/fa'
import { light } from "../styles/theme/light";
import { dark } from "../styles/theme/dark";

export function Header({ setTheme }){
   const { name } = useContext(ThemeContext);

   function changeTheme(){
      setTheme(old => old.name === "dark" ? light : dark)
   }
   return (
      <DivHeader>
         <Title>devfinder</Title>
         {name === 'dark' ? (
            <BtnTheme onClick={changeTheme}> 
               LIGHT <FaSun style={{marginLeft: 5}}/> 
            </BtnTheme>
         ) : (
            <BtnTheme onClick={changeTheme}> 
               DARK <FaMoon style={{marginLeft: 5}}/> 
            </BtnTheme>
         )}
      </DivHeader>
   );
}