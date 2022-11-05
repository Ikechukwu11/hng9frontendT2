import React from 'react';
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

        
        <form className="container m-0 p-0">
          <div className="row">
            <div className="form-group mt-4 col-md-6">
              <label htmlFor="first_name">First name</label>
              <input type="text" placeholder='Enter your first name' className="form-control" id="first_name" required />
            </div>
            <div className="form-group mt-4 col-md-6">
              <label htmlFor="last_name">Last name</label>
              <input type="text" placeholder='Enter your last name' className="form-control" id="last_name" required />
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" placeholder="yourname@email.com" required />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows ="5" id='message' required placeholder="Send me a message and I'll reply you as soon as possible...">

            </textarea>
          </div>
        
          <div className="form-group mt-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" required />
              <label className="form-check-label" htmlFor="gridCheck">
              You agree to providing your data to who may contact you.
              </label>
            </div>
          </div>
          <div className="form-group mt-4 mb-5">
          <button type="submit" id='btn__submit' className="btn btn-primary form-control">Send message</button>
          </div>
        </form>
        
      </header>
      <footer className='App-footer contact-footer'>
        <img src={'./img/Zuri.Internship_Logo.png'} id="zuri_logo" className="mt-3 zuri_logo" alt="zuri_logo" />
        <p className='mt-3'>HNG Internship 9 Frontend Task</p>
        <img src={'./img/I4G.png'} id="hng_logo" className="mt-3 hng_logo" alt="hng_logo" />
      </footer>
    </div>
    )
}
