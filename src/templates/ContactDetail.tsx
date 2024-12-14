// pages/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-start justify-center bg-teal-700 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">Contact Us</h1>
        <p className="mb-4 text-gray-600">
          If you have any questions or need further information, feel free to
          reach out to us.
        </p>
        <div className="mb-3">
          <h2 className="text-xl font-semibold text-gray-800">Our Address</h2>
          <p className="text-gray-600">21 Sassoon Road,</p>
          <p className="text-gray-600">Pokfulam,</p>
          <p className="text-gray-600">Hong Kong SAR, China</p>
        </div>
        <div className="mb-3">
          <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
          <p className="text-gray-600">+852 3917 9175</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Email</h2>
          <p className="text-gray-600">medfac@hku.hk</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
