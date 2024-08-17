import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact py-16 bg-[#FFFBE6] text-gray-900 mt-20 mb-0">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-700">
          We'd love to hear from you! Whether you have a question, need assistance, or just want to chat, we're here for you.
        </p>
        <div className="mt-8 space-y-6">
          <p className="text-lg flex justify-center items-center">
            <FaPhoneAlt className="mr-2 text-2xl text-orange-500" />
            <span className="font-semibold">Phone:</span> +2519 11 305410, +2519 61 334454
          </p>
          <p className="text-lg flex justify-center items-center">
            <FaEnvelope className="mr-2 text-2xl text-orange-500" />
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:dawitaberacbe@gmail.com" className="text-blue-500 hover:underline">
              dawitaberacbe@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-12">
          <a href="mailto:dawitaberacbe@gmail.com" className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2">
            <FaPaperPlane className="text-2xl" />
            <span>Send Us a Message</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
