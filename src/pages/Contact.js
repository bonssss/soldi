import React from 'react';

const Contact = () => {
  return (
    <div className="contact py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-600">We'd love to hear from you!</p>
        <div className="mt-8">
          <p className="text-gray-600">Phone: +2519 11 305410, +2519 61 334454</p>
          <p className="text-gray-600">Email: <a href="mailto:dawitaberacbe@gmail.com" className="text-blue-500 hover:underline">dawitaberacbe@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
