import { ThemeProvider } from 'styled-components';
import { useState } from "react";
import { light } from "../styles/theme/light";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { DivHome, DivCart, DivInfo, DivUser, DivRepo, DivInfoMore } from "../styles/home";
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

const meses = [ "Jan","Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ];

export function Home(){
   const [theme, setTheme] = useState(light);
   const [user, setUser] = useState();

   function formatDate(date){
      const data = new Date(date);
      let stringDate = `Joined ${data.getDate()} ${meses[data.getMonth()]} ${data.getFullYear()}`;
      return stringDate;
   }
   return(
      <ThemeProvider theme={theme} >
         <DivHome>
            <Header setTheme={setTheme}/>
            <Search setUser={setUser}/>
            {!user ? (
                  <DivCart>
                     <p>Usuario não encontrado!</p>
                  </DivCart>
            ) : (
               <DivCart>
                  <img 
                     src={user?.avatar_url} alt="franwanderley"/>
                  <DivInfo>
                     <div>
                        <DivUser>
                           <h3>{user?.name || user?.login}</h3>
                           <p>{"@" + user.login}</p>
                        </DivUser>
                        <p>{formatDate(user.created_at)}</p>
                     </div>

                     <p>
                        {user?.bio || "The profile has no bio" }
                     </p>
                     <DivRepo>
                        <div>
                           <p>Repos</p>
                           <p>{user?.public_repos || 0}</p>
                        </div>
                        <div>
                           <p>Followers</p>
                           <p>{user?.followers || 0}</p>
                        </div>
                        <div>
                           <p>Following</p>
                           <p>{user?.following || 0}</p>
                        </div>
                     </DivRepo>
                     <DivInfoMore>
                     <div>
                        <FaMapMarkerAlt/>
                        <p>{user?.location || "Not Avaliable"}</p>
                     </div>
                     <div>
                        <FaTwitter/>
                        <p style={{color: '#4d5971'}}>Not Available</p>
                     </div>
                     </DivInfoMore>
                     <DivInfoMore>
                     <div>
                        <FaLink/>
                        <a href={user?.blog}>
                           {user?.blog}
                        </a>
                     </div>
                     <div>
                        <FaBuilding/>
                        <p>{user?.company}</p>
                     </div>
                     </DivInfoMore>
                  </DivInfo>
               </DivCart>
            )}
         </DivHome>

      </ThemeProvider>
   );
}
