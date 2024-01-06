import { useState } from 'react'
import './style.css'



export default function App() {
  return (
    <div>
      <div className="text-center">
      <h1>About</h1>
      <h5>Muhammet Mustafa Cırcır</h5>
      <h5><b>Welcome!</b></h5>
      </div>
      <div className="container">
      <div className="text-center">
      </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <div className="card text-white bg-dark mb-3" >
            <div className="card-header" >What Did I Do?</div>             
              <div className="card-body">
               
                <div class="alert alert-warning" role="alert">
                Software Student <a href="https://uretkenakademi.com"target="_blank">Ü.A.</a>
                </div>
                <div class="alert alert-warning" role="alert">
                I Do E-Commerce <a href="https://vakreste.tabbs.co/"target="_blank">Vakreste</a>
                </div>
                <div class="alert alert-warning" role="alert">
                Mobile,Game,Application <a href="https://tgads.tabbs.co/"target="_blank">TGADS</a>
                </div>
                <div class="alert alert-warning" role="alert">
                E-Sports
                </div>
                <div class="alert alert-warning" role="alert">
                Folk Dancing 
                </div>
              </div>
            </div>
            <div className="card text-white bg-dark mb-3ard">
            <div className="card-header">My pages</div>
              
              <div className="card-body">
                  <button type="button" className="btn btn-dark btn-block alert-dark">Linkedin</button>
                  <button type="button" className="btn btn-dark btn-block alert-dark">Github</button>
                  <button type="button" className="btn btn-dark btn-block alert-dark">X.com</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-7">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">What am I doing?</div>
              <div className="card-body">
                
              <div>
          <h2>I want university computer engineering</h2>
          <p>This year is my second chance to go to the department I want and I want to go to the department I want. I do my best to achieve this at home and in the classroom.</p>
        </div>
        <hr/>
        <br></br>
        <div>
          <h2>I improve myself with MEGA software academy</h2>
          <p>I try to learn new information so that I can stay one step ahead and avoid difficulties when I go to university. mega and productive academy software, the academy is very nice, fun and informative, I have the opportunity to meet people from many different sectors.</p>
        </div>
        <hr/>
        <br></br>
        <div>
          <h2>I am doing the homework given at the software academy.</h2>
        <p>I'm doing the assigned homework, I'm a little behind, but I'll get it done. It's 5th week now, I'm doing my homework for the week 6th, I'll start next week.</p>  
        </div>
        <br></br>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-dark btn-block alert-dark">Communication</button>
      </div>


    </div>
    
  );
}