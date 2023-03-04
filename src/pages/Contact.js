import {React, useState} from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <p className='section_intro'>Send me a message</p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {status === 'success' && (
          <div className="alert alert-success" role="alert">
            Your message has been sent.
          </div>
        )}
        {status === 'error' && (
          <div className="alert alert-danger" role="alert">
            There was an error sending your message. Please try again later.
          </div>
        )}

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
export default Contact;