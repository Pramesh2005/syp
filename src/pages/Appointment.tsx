import React, { useEffect } from 'react';
import { useState } from 'react';
// import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import appointmet from '../assets/appointment.jpg';

const Appointment = () => {
  const[name, setName] = useState('');
  const[gender, setGender] = useState('');
  const[age, setAge] = useState('');
  const[doctor, setDoctor] = useState('');
  const[date, setDate] = useState('');
  const[time, setTime] = useState('');
  const[reason, setReason] = useState('');

  const navigate = useNavigate();

const Submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  axios.post('http://localhost:3001/appointmentUser', { name, gender, age, doctor, date, time, reason })
  .then((result) =>{
    console.log(result)
    navigate('/history');

  } )
  .catch((err) => console.log(err));
};
  


  

  return (
    <div className="py-16 bg-gray-50 bg-[url('./assects/appointment.jpg')] ">
      <div className="container mx-auto px-4 ">
        <h1 className="text-6xl font-bold text-center mb-12 text-amber-300">Book an Appointment</h1>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={Submit} className="bg-opacity-30 backdrop-blur-md bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <input
                    type="text"
                    name="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Sex (e.g., Male, Female)"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Doctor</label>
                <input
                  type="text"
                  name="doctor"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Doctor's Name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="text"
                    placeholder='yy/mm/dd (eg:2025/02/10)'
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Preferred Time</label>
                  <input
                    type="text"
                    placeholder='12 hrs (eg: 9:30 Am)'
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Reason for Visit</label>
                <textarea
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Enter Reason for Visit"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default Appointment;
