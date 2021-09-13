import { useEffect, useState } from "react";
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import Cookie from 'js-cookie';

import { light } from "../styles/theme/light";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import {
   DivHome, DivCart, DivInfo, DivUser, DivUserMobile, DivRepo, DivInfoMore, Time
} from "../styles/home";
import { GlobalStyle } from "../styles/global";
import { dark } from "../styles/theme/dark";

const meses = [ 
   "Jan","Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

export function Home(){
   const [theme, setTheme] = useState(light);
   const [user, setUser] = useState();

   useEffect(() =>{
      setTheme(Cookie.get('devfinder/theme') === 'dark' ? dark : light);
   }, []);
   useEffect(() => {
      Cookie.set('devfinder/theme', theme.name);
   }, [theme]);

   function formatDate(date){
      const data = new Date(date);
      let stringDate = `
         Joined ${data.getDate()} ${meses[data.getMonth()]} ${data.getFullYear()}
      `;
      return stringDate;
   }
   return(
      <ThemeProvider theme={theme} >
         <GlobalStyle/>
         <DivHome>
            <Header setTheme={setTheme}/>
            <Search setUser={setUser}/>
            {!user ? (
                  <DivCart>
                     <p style={{color: '#4d5971'}}>Usuario não encontrado!</p>
                  </DivCart>
            ) : (
               <DivCart>
                  <img src={user?.avatar_url} alt="foto do usuario"/>
                  <DivInfo>
                     <div>
                        <DivUserMobile>
                           <img src={user?.avatar_url} alt="foto do usuario"/>
                           <div>
                              <h3>{user?.name || user?.login}</h3>
                              <p style={{color: "#0075fe",margin: "2px 0"}}>
                                 {"@" + user.login}
                              </p>
                              <p>{formatDate(user.created_at)}</p>
                           </div>
                        </DivUserMobile>
                        <DivUser>
                           <h3>{user?.name || user?.login}</h3>
                           <p style={{color: "#0075fe",margin: "2px 0"}}>
                              {"@" + user.login}
                           </p>
                        </DivUser>
                        <Time>{formatDate(user.created_at)}</Time>
                     </div>
                    {user?.bio ? (
                           <p>{user?.bio}</p>
                        ): (
                           <p style={{color: '#4d5971'}}>The profile has no bio</p>
                        )}
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
                        {user?.location ? (
                           <p>{user?.location}</p>
                        ): (
                           <p style={{color: '#4d5971'}}>Not Available</p>
                        )}
                     </div>
                     <div>
                        <FaTwitter/>
                        {user?.twitter ? (
                           <p>{user?.twitter}</p>
                        ): (
                           <p style={{color: '#4d5971'}}>Not Available</p>
                        )}
                     </div>
                     </DivInfoMore>
                     <DivInfoMore>
                     <div>
                        <FaLink/>
                        {user?.twitter ? (
                           <a href={user?.blog}>
                              {user?.blog}
                           </a>                        
                        ) : (
                           <p style={{color: '#4d5971'}}>Not Available</p>
                        )}
                     </div>
                     <div>
                        <FaBuilding/>
                        {user?.company ? (
                           <p>{user?.company}</p>
                        ): (
                           <p style={{color: '#4d5971'}}>Not Available</p>
                        )}
                     </div>
                     </DivInfoMore>
                  </DivInfo>
               </DivCart>
            )}
         </DivHome>

      </ThemeProvider>
   );
}
