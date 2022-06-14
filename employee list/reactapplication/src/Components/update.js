import upPage from '../add.module.css'

function Update() {
    return (
        <div>
    <body className={upPage.home}>
        <header>

        </header>
        <main>
            <center>
                <br/><br/><br/><br/><br/>
                <div className={upPage.wrapper}>
                    <form action="">
                        <br/><br/><br/>
                        <h1>Update Employee</h1>
                        <br/><br/>
                        <label className={upPage.label} for="id">Enter ID of employee to be updated:</label><br/>
                        <input className={upPage.input} type="text" required/><br/>
                        <label className={upPage.label} for="id">Update Full Name:</label><br/>
                        <input className={upPage.input} type="text"/><br/>
                        <label className={upPage.label} for="id">Update Email:</label><br/>
                        <input className={upPage.input} type="email"/><br/>
                        <label className={upPage.label} for="id">Update Role:</label><br/>
                        <input className={upPage.input} type="text"/><br/>
                        <label className={upPage.label} for="id">Update Picture URL:</label><br/>
                        <input className={upPage.input} type="text"/><br/>
                        <button className={upPage.btn}>Update</button>
                    </form>
                </div>
            </center>
        </main>
    </body>
        </div>
     );
}
export default Update;