import mongoose from 'mongoose';
import dotenv from 'dotenv';

import BookingOffice from '../models/BookingOffice.js';
import DeliveryOffice from '../models/DeliveryOffice.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log('MongoDB Connected');

const bookingData = [
  {
    location: 'Khanna Market',
    name: 'Mukesh',
    contacts: '01143502198,9211726773,9891146748',
    address: 'Shop No. 31,32 Khanna Market Delhi.',
    region: 'Delhi'
  },
  {
    location: 'Khanna Market',
    name: 'Mukesh',
    contacts: '9218014722',
    address: 'Shop No-26 Khanna Market Delhi.',
    region: 'Delhi'
  },
  {
    location: 'Sadar Bazar',
    name: 'Shankar Sharma',
    contacts: '9313655806,8368201954',
    address: 'Shop No.93-94 New Qutab Road Sadar Bazar Teliwara Delhi.',
    region: 'Delhi'
  },
  {
    location: 'Khera Kalan',
    name: 'DN Jha',
    contacts: '8368940586,9650195301',
    address: 'KH.No.47/22 Radhe Radhe Gali Kava Transport Khera Kalan.',
    region: 'Delhi'
  },
  {
    location: 'Bawana',
    name: 'Deepak Sharma',
    contacts: '9555078167,9911443996',
    address: '154/3 Firni Road Opp Indian Oil Petrol Pump Bawana Industrial Area.',
    region: 'Delhi'
  },
  {
    location: 'Daya Basti',
    name: 'Sandeep',
    contacts: '9999674377',
    address: '19/310 Old Rohtak Road Daya Basti Near Furkania Masjid Delhi.',
    region: 'Delhi'
  },
  {
    location: 'Gandhi Nagar',
    name: 'Ajay Anand',
    contacts: '7834888503,8057307837',
    address: 'Main Road Kailash Nagar Near JB Medical.',
    region: 'Delhi'
  },
  {
    location: 'Jamna Bazar',
    name: 'Rahul Malhotra',
    contacts: '9310078977,9312650259',
    address: '1860/1856 Jaat Fauji Dharamshala Jamna Bazar Near Hanuman Mandir.',
    region: 'Delhi'
  },
  {
    location: 'Karol Bagh',
    name: 'S.K Oberi',
    contacts: '01141563899,9868781291',
    address: '953-956/4 A-J Chamber Jain Mandir Marg Naiwala Karol Bagh Delhi.',
    region: 'Delhi'
  },
  {
    location: 'Noida',
    name: 'Parveen Gupta',
    contacts: '9218012535',
    address: 'Sector-5 Harola Opp Fire Station Near Bharat Gas Noida.',
    region: 'Uttar Pradesh'
  },
  {
    location: 'Karnal',
    name: 'Ravi Singh',
    contacts: '9354113926',
    address: 'JSR Road Carrier S.L.O No.26 Sec-3 HSIDC Karnal Haryana.',
    region: 'Haryana'
  },
  {
    location: 'Chandigarh',
    name: 'Ganesh Attreya',
    contacts: '8847462925,9876863807',
    address: '4 Transport Area Sector-26 Chandigarh.',
    region: 'Punjab'
  },
  {
    location: 'Ahmedabad',
    name: 'Rohtash Kumar',
    contacts: '9218303756,9218303752',
    address: 'BLOCK NO-1600B/2 DAGA ESTATE NH-8 JETALPUR AHMEDABAD.',
    region: 'Gujarat'
  }
];

const deliveryData = [
  {
    location: 'Azamgarh',
    name: 'Amit',
    contacts: '8573028531,9670002153',
    address: 'Qyampur Kotwa Near Kartikya Dharam Kata Azamgarh.',
    region: 'Uttar Pradesh'
  },
  {
    location: 'Gorakhpur',
    name: 'Manish Singh',
    contacts: '9936409920,9336402820',
    address: 'Plot No.110 Near Golden Gas Service TPT Nagar Gorakhpur.',
    region: 'Uttar Pradesh'
  },
  {
    location: 'Lucknow',
    name: 'Sanjay Sharma',
    contacts: '8090408899,9305182357',
    address: 'Aishbagh Malvea Nagar Chauraha Gupta Market Godown No.4 Lucknow.',
    region: 'Uttar Pradesh'
  },
  {
    location: 'Patna',
    name: 'Jamil Akhter',
    contacts: '7003158671,7070980786',
    address: 'Metro Pillar No.172 Gaya Road Bus Stand Near Umro Banquet Hall Patna.',
    region: 'Bihar'
  },
  {
    location: 'Muzaffarpur',
    name: 'Nav Ratan Lal Mishra',
    contacts: '9431474737',
    address: 'Akhara Ghat Road Old FCI Near Ratna Banquet Hall Muzaffarpur.',
    region: 'Bihar'
  },
  {
    location: 'Ranchi',
    name: 'Anil Tiwari',
    contacts: '8804532046',
    address: 'Gaddi Khana Chowk Near Lal Batti Sarkari School Ranchi.',
    region: 'Jharkhand'
  },
  {
    location: 'Asansol',
    name: 'Zahid Malik',
    contacts: '8768000055,9851990270',
    address: '49 G.T Road Mallick Mansion Near Gujrati School Asansol.',
    region: 'West Bengal'
  },
  {
    location: 'Dhubri',
    name: 'B.N. Jha',
    contacts: '8638662023',
    address: 'Lal Mill Compound Ward No.3 Baluchar Dhubri Assam.',
    region: 'Assam'
  }
];

const importData = async () => {
  try {
    await BookingOffice.deleteMany();
    await DeliveryOffice.deleteMany();

    await BookingOffice.insertMany(bookingData);
    await DeliveryOffice.insertMany(deliveryData);

    console.log('Complete Data Imported Successfully');

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();

