import mongoose from 'mongoose';

const deliveryOfficeSchema = new mongoose.Schema({
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
    enum: ['Uttar Pradesh', 'Bihar', 'Jharkhand', 'West Bengal', 'Assam', 'Punjab', 'Haryana', 'Delhi', 'Gujarat', 'Telangana', 'Andhra Pradesh', 'Kerela', 'Tamil Nadu'],
    default: 'Uttar Pradesh'
  },
  pincode: {
    type: String,
    trim: true,
    default: ''
  },
  landmark: {
    type: String,
    trim: true,
    default: ''
  },
  alternatePhone: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Add index for search
deliveryOfficeSchema.index({ location: 'text', name: 'text', contacts: 'text', pincode: 'text' });

const DeliveryOffice = mongoose.model('DeliveryOffice', deliveryOfficeSchema);

export default DeliveryOffice;
