import React from "react";
import { useState } from "react";

import Axios from 'axios'
import addPage from '../add.module.css'


function Add () {
    const [fname, setFname] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")



    const addEmp = () => {
        Axios.post("http://localhost:3001/emp", {fname: fname, 
        surname: surname, 
        email: email,
        role: role})
    }

    return (  
        <div>
             <body className={addPage.body}>
        <header>

        </header>
        <main>
            <br /><br /><br/><br/><br/><br/><br/><br/><br/><br/>
            <center>
                <div className={addPage.wrapper}>
                    <br/><br/><br/>
                    <h1>Add New Employee</h1>
                    <form action="">
                        <input className={addPage.input} type="text" placeholder="Full Name" required 
                        onChange={(event) => {setFname(event.target.value)}}/><br/>
                        <input className={addPage.input} type="text" placeholder="surname" required
                        onChange= {(event) => {setSurname(event.target.value)}}/><br/>
                        <input className={addPage.input} type="email" placeholder="Email" required
                        onChange= {(event) => {setEmail(event.target.value)}}/><br/>
                        <input className={addPage.input} type="text" placeholder="Role" required
                        onChange= {(event) => {setRole(event.target.value)}}/><br/>
                        <button onClick={addEmp} className={addPage.btn} type="submit">ADD</button>
                    </form>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </center>
        </main>
    </body>
        </div>
    );
}
 
export default Add;