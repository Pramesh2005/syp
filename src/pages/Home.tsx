import React from 'react';
import { Users, Brain, Heart, Stethoscope, Microscope, ChevronFirst as FirstAid } from 'lucide-react';
import home from '../assects/home.jpg';
import samishya from '../assects/Samishya.jpeg';
import rajeeb from '../assects/Rajeeb.jpeg';
import prince from '../assects/prince.jpeg';
const departments = [
  { icon: Heart, name: 'Cardiology', description: 'Expert heart care and treatment' },
  { icon: Brain, name: 'Neurology', description: 'Specialized brain and nerve care' },
  { icon: FirstAid, name: 'Emergency', description: '24/7 emergency medical services' },
  { icon: Microscope, name: 'Laboratory', description: 'Advanced diagnostic services' },
  { icon: Users, name: 'Family Medicine', description: 'Comprehensive family healthcare' },
  { icon: Stethoscope, name: 'Internal Medicine', description: 'General adult healthcare' },
];

const featuredDoctors = [
  {
    name: 'Dr. Rajeep Nepal',
    specialty: 'Dermatology',
    image: rajeeb
  },
  {
    name: 'Dr. Samishya Neupane',
    specialty: 'Orthopedics',
    image:samishya
  },
  {
    name: 'Dr. Prince Shrestha',
    specialty: 'Family Medicine',
    image:prince
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" relative h-[500px] bg-[url('./assects/home.jpg')]">
        <img
          src={home}
          alt="Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="bg-opacity-50 backdrop-blur-md text-4xl md:text-6xl font-bold mb-4">Your Health Is Our Priority</h1>
            <p className="bg-opacity-50 backdrop-blur-md text-xl md:text-2xl italic">
              "The greatest wealth is health." 
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <dept.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;