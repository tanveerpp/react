import React from 'react';
import Header from './Header';
const Home=()=>{
    return(
        <>
        <div class="container">
            <Header/>
        <h1> </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-sm-4">
                <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-l2mbq8hc254dr18mklt06tn861-20170625013703.Medi.jpeg" alt="noimg" className="rounded-circle h-500 w-100"></img>
            </div>
            <div className="col-sm-8">
                <h5 className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </h5>
            </div>
        </div>
        </div>
        </>
    )
}
export default Home;