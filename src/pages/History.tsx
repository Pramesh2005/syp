import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Appointment {
  _id: string;
  name: string;
  gender: string;
  age: number;
  doctor: string;
  date: string;
  time: string;
  reason: string;
}

const History = () => {
  const [history, setHistory] = useState<Appointment[]>([]);

  useEffect(() => {
    axios.get<Appointment[]>('http://localhost:3001/appointmentUser')
      .then((result) => {
        console.log('Fetched Appointments:', result.data);
        setHistory(result.data);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, []);

  // const handleDelete = (id) => {
  //   axios.delete('http://localhost:3001/appointmentUser/deleteUser/'+id)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // }

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(res => {
        console.log("Deleted successfully:", res.data);
        alert("Appointment deleted successfully!"); // ✅ Optional user feedback
        window.location.reload(); // ✅ Refresh UI after delete
      })
      .catch(err => console.error("Error deleting:", err.response?.data || err.message));
  };

  return (
    <div className="bg-[url('./assects/history.jpg')] flex h-screen bg-gray-100 justify-center items-center bg-cover bg-center">
      <div className=" bg-opacity-50 backdrop-blur-md w-3/4 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Appointment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">Gender</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-left">Doctor</th>
                <th className="py-3 px-6 text-left">Preferred Date</th>
                <th className="py-3 px-6 text-left">Preferred Time</th>
                <th className="py-3 px-6 text-left">Reason</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {history.map((AppointmentData, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{AppointmentData.name}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.gender}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.age}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.doctor}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.date}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.time}</td>
                  <td className="py-3 px-6 text-left">{AppointmentData.reason}</td>
                  <td className="py-3 px-6 text-left flex space-x-2">
                    <Link to= {`/UpdateAppointment/${AppointmentData._id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Update</Link>
                    {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
                    onClick={(e) =>handleDelete(appointmentItem._id)}>Delete</button> */}
                    <button 
  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
  onClick={() => handleDelete(AppointmentData._id)}
>
  Delete
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
