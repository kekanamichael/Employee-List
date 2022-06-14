import React from "react"
import Axios from 'axios'
import { useState } from "react"
import regPage from '../index.module.css'

import insta from '../insta.jpg'
import facebook from '../files/svg/face.jpg'
import linkedin from '../files/svg/download.png'
import twitter from '../files/svg/twitter1.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Register() {
    const [fname, setFname] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("") 

    const createAdmin = () => {
      Axios.post("http://localhost:3001/create", {fname: fname, 
      surname: surname, 
      email: email, 
      password: password, 
      conPassword: conPassword})
    }

    return (
      <div>
        <head>
          <title>WELCOME</title>
        </head>
        <body>
          <div className={regPage.wel}>
            <br /><br /><br /><br />
            <h1 >WELCOME TO NetJos</h1>
            <p>..It's a Metter of Integrity..</p>
            <br /><br /><br /><br /><br /><br /><br />
            <img className={regPage.img} src= {insta} alt="" />
            <img className={regPage.img} src={facebook} alt="" />
            <img className={regPage.img} src={linkedin} alt="" />
            <img className={regPage.img} src={twitter}alt="" /> 
        </div>
        <div className={regPage.form}>
          <center>
            <form action="">
              <br /><br /><br /><br />
              <h2>Sign Up</h2><br />
              <input className={regPage.input} type="text" placeholder="Name" required 
              onChange = {(event) => {setFname(event.target.value)}} /><br />                    
              <input className={regPage.input} type="text" placeholder="Surname" required 
              onChange = {(event) => {setSurname(event.target.value)}}/><br />
              <input className={regPage.input} type="email" placeholder="Email address" required 
              onChange = {(event) => {setEmail(event.target.value)}}/><br />
              <input className={regPage.input} type="text" placeholder="Password" required 
              onChange = {(event) => {setPassword(event.target.value)}}/><br />
              <input className={regPage.input} type="text" placeholder="Confirm Password" required 
              onChange = {(event) => {setConPassword(event.target.value)}}/><br />
              <button onClick={createAdmin} className={regPage.button} type="submit">Sign Up</button>
              <p>Already a member? <Link to="/Login">Login</Link></p>
            </form>
         </center>
        </div>
       </body>
      </div>
    );
  }
  
  export default Register;