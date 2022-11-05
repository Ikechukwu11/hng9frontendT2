import React from 'react';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function Contact(){
    return (
    <div className="App">
      <header className="App-header  contact-header text-start">
        <h3 className=''>
         Contact Me
        </h3>
        <p>
         Hi there, contact me to ask me about anything you have in mind.
        </p>

        
        <form className="container mt-5">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="fname">First name</label>
              <input type="text" placeholder='Enter your first name' className="form-control" id="fname" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lname">Last name</label>
              <input type="text" placeholder='Enter your last name' className="form-control" id="lname" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Address">Email</label>
            <input type="text" className="form-control" id="mail" placeholder="yourname@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows ="3" id='message' placeholder="Send me a message and I'll reply you as soon as possible...">

            </textarea>
          </div>
        
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        
      </header>
      <footer className='App-footer'>
        <img src={'./img/Zuri.Internship_Logo.png'} id="zuri_logo" className="zuri_logo" alt="zuri_logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={'./img/I4G.png'} id="hng_logo" className="hng_logo" alt="hng_logo" />
      </footer>
    </div>
    )
}
