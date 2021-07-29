import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
const Products=()=>{
    const[data,changedata]=useState([]);
    useEffect(()=>{
        async function getData()
        {
            const d=await axios.get("https://restapittt.herokuapp.com/products/");
            changedata(d.data);
        }
        getData();
    });
    return(
    
     <div className="container">
         <Header/>
         <br/><br/><br/><br/>
         <div className="row">
             {data.map((item)=>{
                 return(
                    <div className="col-sm-4" >
    <div class="card">
        <img class="card-img-top h-100 w-100" height="100px" width="100px" src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/07/photography-lenses-oranges.jpg" alt="Cardimage"/>
        <div class="card-body">
      <h4 class="card-title">NAME : {item.name}<br/>
      PRICE : {item.price} 
      </h4>
      <p class="card-text">Category : {item.cat} <br/>Company : {item.cmp}</p>
      </div>
        </div>
    </div>
                 )
             })}
    </div>
    </div>   
    )
}
export default Products;