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

        
        <form >
        <div className="mb-3 ">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          
        </button>
      </form>
        
        <div className='App-link-div'>
        <a
          className="App-link"
          href="https://hng9.slack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={'./img/slack.svg'} id="profile_img" className="social_svg" alt="slack_svg" />
        </a>
        <a
          className="App-link"
          href="https://github.com/Ikechukwu11"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={'./img/github.svg'} id="profile_img" className="social_svg" alt="github_svg" />
        </a>
        </div>
        
      </header>
      <footer className='App-footer'>
        <img src={'./img/Zuri.Internship_Logo.png'} id="zuri_logo" className="zuri_logo" alt="zuri_logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={'./img/I4G.png'} id="hng_logo" className="hng_logo" alt="hng_logo" />
      </footer>
    </div>
    )
}
