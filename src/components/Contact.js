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
        
        
        <div className='App-link-div'>
        <a id='twitter'
          className="App-link"
          href="https://twitter.com/ikechukwukev"
          target="_blank"
          rel="noopener noreferrer"
        >
         @ikechukwukev
        </a>
        </div>

        <div className='App-link-div'>
        <a id='btn__zuri'
          className="App-link"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
        </div>

        <div className='App-link-div'>
        <a id='books'
          className="App-link"
          href="https://books.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
        </div>

        <div className='App-link-div'>
        <a id='book__python'
          className="App-link"
          href="https://books.zuri.team/python-for-beginners?ref_id=%3Ckekesmovic%3E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Books
        </a>
        </div>

        <div className='App-link-div'>
        <a id='pitch'
          className="App-link"
          href="https://background.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>
        </div>
        
        <div className='App-link-div'>
        <a id='book__design'
          className="App-link"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
        </div>

        <div className='App-link-div'>
        <Link to="contact">
        <a id='contact'
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
        </Link>
        </div>

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
