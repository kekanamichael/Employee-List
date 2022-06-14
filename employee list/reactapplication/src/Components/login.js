import React from "react";

import { Link } from "react-router-dom";


import logPage from '../login.module.css';

import face from '../files/svg/face.jpg'
import g from '../files/svg/g.png'
import linkedin from '../files/svg/download.png'

function Login(){
   return( 
   <div>
      
      
      <body className={logPage.body}>
         <header>
            <div></div>
            
         </header>
         <main>
            <div className={logPage.login}>
               <center>
                  <form action="" id="log">
                     <br/><br/><br/>
                     <h1 className={logPage.header1}>Login to your account</h1><br/><br/>
                      <input type="email" placeholder="Email Address"/><br/>
                      <input type="password" placeholder="Password"/><br/>
                      <button type="submit">Login</button>
                      <br/><br/><br/>
                      <p>------------------------------<b>OR</b>------------------------------</p>
                      <center>Login with</center><br/><br/>
                      <img className={logPage.img} src={face} alt=""/>
                      <img className={logPage.img}  src={g} alt=""/>
                      <img className={logPage.img}  src={linkedin} alt=""/>
                 </form>
              </center>
              </div>
              <div className={logPage.sign}>
                 <br/><br/><br/><br/><br/>
                 <h1>New here?</h1>
                 <p>Sign Up and discover a great <br/> amount of new opportunites</p>
                 <br/>
                 <Link to = "/" className={logPage.button1}>Sign Up</Link>
                 </div>
                 </main>
            </body>
       </div>
   );
}

export default Login;