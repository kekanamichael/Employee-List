import { Link } from 'react-router-dom';
import mike from '../files/svg/mike.jpg'
import Axios  from 'axios';
import { useEffect, useState } from 'react';

import empPage from '../employees.module.css'

function Employees() {
     const [fname, setFname] = useState("")
      const [surname, setSurname] = useState("")
      const [email, setEmail] = useState("")
     const [role, setRole] = useState("")

    
    const [empList, setEmpList] = useState([])

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response) => {
            setEmpList(response.data);
        });

    }, [])

    const deleteEmp = (id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }
    return ( 
        <div>
              <body className={empPage.body}>
        <div className={empPage.wrapper}>
            
                <h1 className={empPage.h1}>OUR TEAM</h1>
                <Link className={empPage.adde} to="/Add">Add Member</Link>
                <div className={empPage.flexcontainer}>
                    
                    {empList.map((val, key) =>{
                        return <div key={key} className={empPage.box}>
                                    <div className={empPage.wrapper1}>
                                         <br/><br/>
                                         <span>{val.fname}</span><span> {val.surname}</span>
                                    </div> 
                                    <div className={empPage.photo}><img src={mike} alt=""/></div> <br/>
                                    <div>{val.email}</div><br/>
                                    <div>{val.role}</div>
                                    <button className={empPage.lin}>UPDATE</button>
                                    <button onClick={() => deleteEmp(val._id)} className={empPage.btn}>DELETE</button>
                            </div>
                        }) }
                         
                    {/* <div className={empPage.navmenu}>
                        <nav>
                            <ul>
                                <li><Link to="/Add">+Add New Member</Link></li>
                                <li><Link to="/Update">Update</Link></li>
                                <li><Link to="/Delete">Delete</Link></li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
        </div>
    </body>
        </div>
    );
}
 
export default Employees;