import React from 'react';
export default function Contact(){

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { first_name, last_name, email, check, message } = e.target.elements
    let formval = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      check:check.checked,
      message: message.value,
    }
    //console.log(check.checked);
    if( formval['first_name']==='' || 
      formval['last_name']==='' || 
      formval['email']==='' ||
      formval['check']===false || 
      formval['message']==='')
      {
      
        if (formval['first_name']==='' ) {
          first_name.style.borderColor=`#F83F23`;
        }
  
        if (formval['last_name']==='' ) {
          last_name.style.borderColor=`#F83F23`;
        }
  
        if (formval['email']==='' ) {
          email.style.borderColor=`#F83F23`;
        }

        if (!formval['check'] ) {
          check.style.borderColor=`#F83F23`;
        }
    
        if (formval['message']==='' ) {
          message.style.borderColor=`#F83F23`;
        }
      } else {
        first_name.style.borderColor=`#D0D5DD`;
        last_name.style.borderColor=`#D0D5DD`;
        email.style.borderColor=`#D0D5DD`;
        message.style.borderColor=`#D0D5DD`;
        alert('Message Sent');
      } 
    }
  
    return (
    <div className="App">
      <header className="App-header  contact-header text-start">
        <h3 className=''>
         Contact Me
        </h3>
        <p>
         Hi there, contact me to ask me about anything you have in mind.
        </p>

        
        <form className="container m-0 p-0" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group mt-4 col-md-6">
              <label htmlFor="first_name">First name</label>
              <input type="text" placeholder='Enter your first name' className="form-control" id="first_name"  />
            </div>
            <div className="form-group mt-4 col-md-6">
              <label htmlFor="last_name">Last name</label>
              <input type="text" placeholder='Enter your last name' className="form-control" id="last_name"  />
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" placeholder="yourname@email.com"  />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows ="5" id='message'  placeholder="Send me a message and I'll reply you as soon as possible...">

            </textarea>
          </div>
        
          <div className="form-group mt-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="check"  />
              <label className="form-check-label" htmlFor="check">
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
