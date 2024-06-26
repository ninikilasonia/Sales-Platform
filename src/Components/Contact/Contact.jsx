import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <div className='contact-info'>
        <p>Email: cosplay@shop.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: KIU</p>
      </div>
      <div className='contact-links'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }} >Facebook</a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>Twitter</a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>Instagram</a>
      </div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className='contact-checkbox'>
          <input
            type='checkbox'
            id='subscribe'
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
          <label htmlFor='subscribe'>Subscribe to our newsletter</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
