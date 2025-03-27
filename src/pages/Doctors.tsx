import React from 'react';
import prakriti from '../assects/prakriti.jpeg';
import rajeeb from '../assects/Rajeeb.jpeg';
import prince from '../assects/prince.jpeg';
import ram from '../assects/ram.jpeg';
import samishya from '../assects/samishya.jpeg';
import manoj from '../assects/manoj.png';

const doctors = [
  {
    id: 1,
    name: 'Dr. Ram Bhahadur Dahal',
    specialty: 'Pediatrics',
    image: ram,
    education: 'MD - Maharajgung Medical Campus',
    experience: '15+ years'
  },
  {
    id: 5,
    name: 'Dr. Manoj Khanal',
    specialty: 'Neurologist',
    image: manoj,
    education: 'MD - Nobel Medical Collage',
    experience: '14+ years'
  },
  {
    id: 3,
    name: 'Dr. Prince Shrestha',
    specialty: 'Family Medicine',
    image: prince,
    education: 'MD - National Academy of Medical Science',
    experience: '7+ years'
  },
  {
    id: 4,
    name: 'Dr. Samishya Neupane',
    specialty: 'Orthopedics',
    image: samishya,
    education: 'MD - Nepal Medical Collage',
    experience: '4+ years'
  },
  {
    id: 2,
    name: 'Dr. Prakriti Kandel',
    specialty: 'Cardiology',
    image: prakriti,
    education: 'MD - Maharajgung Medical Campus',
    experience: '5+ years'
  },
  {
    id: 6,
    name: 'Dr. Rajeeb Nepal',
    specialty: 'Dermatology',
    image: rajeeb,
    education: 'MD - Kathmandu University School of Medical Sciences',
    experience: '9+ years'
  }
];

const Doctors = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Medical Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Education:</span> { doctor.education}
                  </p>
                  <p>
                    <span className="font-medium">Experience:</span> {doctor.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;