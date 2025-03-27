import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import about from '../assects/about.jpg'
const About = () => {
  return (
    <div className="py-16 bg-blue-50">
      {/* Hero Section */}
      <div className="bg-[url('./assects/about.jpg')] relative h-[400px] mb-16">
        <img
          src={about}
          alt="operation threather"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To provide exceptional healthcare services with compassion and expertise,
            ensuring the well-being of our community through innovative medical solutions
            and personalized care.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[ 
            { icon: <Award />, title: "Excellence in Healthcare", desc: "Committed to providing the highest quality medical care" },
            { icon: <Users />, title: "Expert Medical Team", desc: "Highly qualified and experienced healthcare professionals" },
            { icon: <Clock />, title: "24/7 Care", desc: "Round-the-clock medical services and support" },
            { icon: <Heart />, title: "Patient-Centered Care", desc: "Focused on individual patient needs and comfort" }
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="h-16 w-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Medical Services", items: ["Emergency Care", "Specialized Treatments", "Preventive Care", "Surgical Procedures", "Diagnostic Services"] },
              { title: "Support Services", items: ["Rehabilitation", "Mental Health Support", "Nutritional Counseling", "Patient Education", "Home Care Services"] }
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-500">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Our History</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1995, HealthCare Hospital has been at the forefront of medical excellence for over 25 years.
            What started as a small clinic has grown into a comprehensive medical center, serving thousands of patients annually.
          </p>
          <p className="text-gray-600">
            Through continuous innovation and dedication to patient care, we have established ourselves as a leading healthcare provider
            in the region, committed to improving the health and well-being of our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
