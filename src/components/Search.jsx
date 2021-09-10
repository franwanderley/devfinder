import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BtnSearch, DivSearch, InputSearch } from "../styles/search";

export function Search( {setUser} ){
   const [name, setName] = useState();

   async function onSubmit(f){
      f.preventDefault();
      const user = await axios.get(`https://api.github.com/users/${name}`)
      .then(res => res.data)
      .catch(() => alert(`${name} não encontrado.`));

      setUser(user);
   }

   return (
      <DivSearch>
         <form onSubmit={onSubmit}>
            <FaSearch/>
            <InputSearch 
               onChange={({target}) => setName(target.value)} 
               type="search" 
               placeholder="Search Github username..."
            />
            <BtnSearch> Search</BtnSearch>
         </form>
      </DivSearch>
   );
}