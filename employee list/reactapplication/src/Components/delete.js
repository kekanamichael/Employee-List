import delPage from '../add.module.css'
function Delete() {
    return (
        <div>
            <body className= {delPage.body}>
<header>

</header>
<main>
    <center>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className= {delPage.wrapper}>
            <form action="">
                <br/><br/><br/>
                <h1>Delete Employee</h1>
                <br/><br/>
                <label className= {delPage.label} for="id">Enter ID of employee to be Deleted:</label><br/>
                <input className= {delPage.input} type="text" required/><br/>
                <button className= {delPage.btn}>DELETE</button>
                <br/><br/><br/><br/>
            </form>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </center>
</main>
</body>
        </div>
     );
}
export default Delete;