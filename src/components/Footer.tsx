import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import footer from '../assects/footer.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthCare Hospital</h3>
            <img
              src= {footer}
              alt="Hospital"
              className="rounded-lg mb-4"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5" />
              <span>Monday - Friday: 8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Saturday - Sunday: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span> +977 9842044565</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Hospital@healthcare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Hospital Street, Urlabari, 7 Morang</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HealthCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;