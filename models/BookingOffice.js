import mongoose from 'mongoose';

const bookingOfficeSchema = new mongoose.Schema({
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  name: {
    type: String,
    trim: true,
    default: ''
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  contacts: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true
  },
  region: {
    type: String,
    required: [true, 'Region is required'],
    enum: ['Delhi', 'Uttar Pradesh', 'Haryana', 'Punjab', 'Gujarat', 'Himachal Pradesh'],
    default: 'Delhi'
  }
}, {
  timestamps: true
});

// Add index for better search performance
bookingOfficeSchema.index({ location: 'text', name: 'text', contacts: 'text' });

const BookingOffice = mongoose.model('BookingOffice', bookingOfficeSchema);

export default BookingOffice;