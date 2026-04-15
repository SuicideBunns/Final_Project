import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = () => {
    if (!email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    emailjs.send(
      'service_510bj46',      
      'template_rk3n729',     
      {
        from_email: email,
        message: message,
      },
      'kcIisSyoSZ7gstbCV'       
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setEmail('');
      setMessage('');
    })
    .catch(() => {
      setStatus('Failed to send. Please try again.');
    });
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600 text-white"
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600 text-white h-32"
      />

      {status && (
        <p className={`mb-4 text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </p>
      )}

      <button
        onClick={handleSend}
        className="bg-blue-500 px-6 py-2 rounded text-white font-semibold hover:bg-blue-600"
      >
        Send
      </button>
    </section>
  );
}
  
export default Contact;