import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">HealthCare</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/home" className={`${isActive('/home')} font-medium`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} font-medium`}>About Us</Link>
            <Link to="/doctors" className={`${isActive('/doctors')} font-medium`}>Doctors</Link>
            <Link to="/appointment" className={`${isActive('/appointment')} font-medium`}>Appointment</Link>
            <Link to="/contact" className={`${isActive('/contact')} font-medium`}>Contact</Link>
            <Link to="/history" className={`${isActive('/history')} font-medium`}>History</Link>
          </div>

          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Log  out
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;