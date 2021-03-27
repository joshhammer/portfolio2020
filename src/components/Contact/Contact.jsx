
import React from 'react';
import {useState} from 'react';

import './Contact.scss';
// import{ init } from 'emailjs-com';
// init("user_dfoVy0ZdwGuBathP78bJ7");

export default function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = 'contact_template';
	  sendFeedback(templateId, {
      message_html: message, 
      from_name: `${firstname} ${lastname}`, 
      reply_to: email
    })
    initForm();
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', 
      templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  const initForm = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setMessage('');
  }

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
          <input 
            type="email" 
            name='email' 
            placeholder='Email'
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
          />

          <textarea 
            name="message" 
            id="test-mailing" 
            placeholder='Message goes here..' 
            required 
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          
          <input type="submit" value='Send' className='contact-submit-btn' onClick={handleSubmit}/>
          
        </form>

      </div>
    </main>
  )
}
