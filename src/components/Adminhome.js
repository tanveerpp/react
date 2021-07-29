import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Adminhome=()=>
{
    const [fdata,changefdata]=useState({
        name:"",
        price:"",
        cat:"",
        cmp:""
    });
    const [udata,changeudata]=useState({
        id:"",
        name:"",
        price:"",
        cat:"",
        cmp:""
    });
    const[data,changedata]=useState([]);
    useEffect(()=>{
        async function getData()
        {
            const d=await axios.get("https://restapittt.herokuapp.com/products/");
            changedata(d.data);
        }
        getData();
    });
    const addData=(e)=>
    {
        changefdata({...fdata,[e.target.name]:e.target.value});
    }
    const updateData=(e)=>
    {
        changeudata({...udata,[e.target.name]:e.target.value});
    }
    const submit=(e)=>
    {
        e.preventDefault();
        async function putData()
        {
            const d=await axios.post("https://restapittt.herokuapp.com/products/",fdata);
            window.alert("product added sucessfully");
            //window.location.href="http://localhost:3000/adminhome";
        }
        putData();
    }
    const submits=(e)=>
    {
        e.preventDefault();
        async function updata()
        {
            const url=`https://restapittt.herokuapp.com/products/${udata.id}/`;
            let options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify(udata)
            }
            await fetch(url,options);
            window.alert("sucessfully updated");
        }
        updata();
    }
    return (
        <div>
        
            <div className="container">
                <h1 className="text-center">WELCOME TO ADMIN PANEL</h1>
                <table className="table table-bordered table-stripped table-hover">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>COMPANY</th>
                    </thead>
                    <tbody>
                {data.map((item)=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.cat}</td>
                        <td>{item.cmp}</td>
                        <td><button className="btn btn-warning" onClick={()=>{
                            let url=`https://restapittt.herokuapp.com/products/${item.id}`;
                            async function deleteData()
                            {
                                const d=await axios.delete(url);
                                console.log(d);
                                window.alert("product sucessfully deleted");
                            }
                            deleteData();
                        }}>delete</button></td>
                        <td>
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={()=>{changeudata(item)}}>update</button>

  
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Update Product</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <form onSubmit={submits}>
                <div class="form-group">
                        <label>NAME : </label>
                        <input type="text" name="name" placeholder="please enter name" value={udata.name} onChange={updateData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>PRICE : </label>
                        <input type="number" name="price" placeholder="please enter name" value={udata.price} onChange={updateData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>CATEGORY : </label>
                        <input type="text" name="cat" placeholder="please enter name" value={udata.cat} onChange={updateData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>COMPANY : </label>
                        <input type="text" name="cmp" placeholder="please enter name" value={udata.cmp} onChange={updateData} className="form-control"></input>
                    </div>
                    <button className="btn btn-danger">Update Product</button>
                </form>
        </div>
      </div>
    </div>
  </div>
  
                        </td>
                        </tr>;
                })}
                </tbody>
                </table>
                <br/>
                <form onSubmit={submit}>
                <div class="form-group">
                        <label>NAME : </label>
                        <input type="text" name="name" placeholder="please enter name" value={fdata.name} onChange={addData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>PRICE : </label>
                        <input type="number" name="price" placeholder="please enter name" value={fdata.price} onChange={addData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>CATEGORY : </label>
                        <input type="text" name="cat" placeholder="please enter name" value={fdata.cat} onChange={addData} className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>COMPANY : </label>
                        <input type="text" name="cmp" placeholder="please enter name" value={fdata.cmp} onChange={addData} className="form-control"></input>
                    </div>
                    <button className="btn btn-danger">Add Product</button>
                </form>
            </div>
        
        </div>
    )
}
export default Adminhome;