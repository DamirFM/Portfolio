import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Pages.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqygbwb");

  if (state.succeeded) {
    return <h2>Thanks for contacting!</h2>;
  }

  return (
    <div className="container text-center">
    <h1>Please leave your message</h1>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="name"
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
     
        errors={state.errors}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="container text-center">
      <ContactForm />
    </div>
  );
}

export default ContactPage;
