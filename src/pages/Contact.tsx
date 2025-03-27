import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:3001/message', { name, email, message })
    .then((result) =>{
      console.log(result)
      navigate('/home');
      alert('Message sent successfully!');
  
    } )
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="bg-[url('./assects/contact.jpg')] py-16 bg-gray-50 justify-center items-center bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h1 className="bg-opacity-50 backdrop-blur-sm text-5xl font-bold text-red-600 text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">+977 984204466</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">Hospital@healthcare.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-600"> Medical Street</p>
                  <p className="text-gray-600">Urlabari, 7 Nepal</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-opacity-50 backdrop-blur-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form  onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name='name'
                  value={name}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name='email'
                  value={email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                name='message'
                value={message}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}

                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;