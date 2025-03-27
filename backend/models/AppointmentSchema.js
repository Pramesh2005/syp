const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true, // Age is required
        min: 0, 
        max:120// Minimum value of age should be 0
      },
      doctor: {
        type: String, 
        required: true, // Doctor selection is required
      },
      date: {
        type: Date,
        required: true, // Preferred date is required
      },
      time: {
        type: String,
        required: true, // Preferred time is required
      },
      reason: {
        type: String,
        required: true, // Reason for visit is required
      },
    
});


const AppointmentModel = mongoose.model("AppointmentData",AppointmentSchema);
module.exports= AppointmentModel;