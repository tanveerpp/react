import React, { useState } from 'react';

const Admin=()=>{
    const [uid,changeuid]=useState("");
    const [pwd,changepwd]=useState("");
    function submit(e)
    {
        e.preventDefault();
        if(uid==="admin"&&pwd==="12345")
        {
            window.location.href="http://localhost:3000/adminhome";
        }
    }
    function changeinput(event)
    {
        if(event.target.name==='uid')
        {
            changeuid(event.target.value);
        }
        else if(event.target.name==='pwd')
        {
            changepwd(event.target.value);
        }
    }
    return(
        <>
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>USER ID</label>
                    <input type="text" name="uid" placeholder="please enter user id" className="form-control" value={uid} onChange={changeinput} />
                </div>
                <div className="form-group">
                    <label>USER PASSWORD</label>
                    <input type="password" name="pwd" placeholder="please enter password" className="form-control" value={pwd} onChange={changeinput} />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}
export default Admin;