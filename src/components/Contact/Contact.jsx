import React from 'react';
import {useState} from 'react';

import './Contact.scss';

export default function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');


  return(
    <main className="container contact-container">
      <h1 className='section-title contact-title'>Contact</h1>
      <div className="contact-form-container">
        <form action="">
          <input 
            type="text" 
            name='firstname' 
            placeholder='Firstname' 
            value={firstname} 
            onChange={(event) => setFirstname(event.target.value)}
          />

          <input 
            type="text" 
            name='lastname' 
            placeholder='Lastname'
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
          <input type="email" name='email' placeholder='Email'/>

          {/* <input type="textarea" placeholder='Drop me a line...' value={message} onChange={(event) => setMessage(event.target.value)}/> */}
          <textarea name="" id="" placeholder='Message goes here..'></textarea>
          <input type="submit" value='Send'/>
        </form>

      </div>
    </main>
  )
}