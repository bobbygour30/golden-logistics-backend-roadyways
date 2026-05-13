import mongoose from 'mongoose';
import dotenv from 'dotenv';
import BookingOffice from '../models/BookingOffice.js';
import DeliveryOffice from '../models/DeliveryOffice.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    await BookingOffice.deleteMany({});
    await DeliveryOffice.deleteMany({});
    console.log('🗑️ Old data cleared');

    const bookingData = [
      // DELHI BOOKING OFFICES [cite: 1]
      { location: 'Khanna Market', name: 'Mukesh', contacts: '01143502198, 9211726773, 9891146748', address: 'Shop No. 31,32 Khanna Market Delhi.', region: 'Delhi' },
      { location: 'Khanna Market', name: 'Mukesh', contacts: '9218014722', address: 'Shop No-26 Khanna Market Delhi.', region: 'Delhi' },
      { location: 'Sadar Bazar', name: 'Shankar Sharma', contacts: '9313655806, 8368201954', address: 'Shop No.93-94 New Qutab Road Sadar Bazar Teliwara Delhi.', region: 'Delhi' },
      { location: 'Khera Kalan', name: 'DN Jha', contacts: '8368940586, 9650195301', address: 'KH.No.47/22, Radhe Radhe Gali Kava Transport Khera Kalan.', region: 'Delhi' },
      { location: 'Bawana', name: 'Deepak Sharma', contacts: '9555078167, 9911443996', address: '154/3, Firni Road, Opp. Indian Oil Petrol Pump, Bawana Industrial Area.', region: 'Delhi' },
      { location: 'Daya Basti', name: 'Sandeep', contacts: '9999674377', address: '19/310 Old Rohtak Road, Daya Basti, Near Furkania Masjid Delhi.', region: 'Delhi' },
      { location: 'Gandhi Nagar', name: 'Ajay Anand', contacts: '7834888503, 8057307837', address: 'Main Road Kailash Nagar Near JB Medical.', region: 'Delhi' },
      { location: 'Gandhi Nagar', name: 'Ajay Anand', contacts: '7834888503, 8377913034', address: '9/6 Main Pushta Road Gandhi Nagar (Opp. Pillar No.26)', region: 'Delhi' },
      { location: 'Jamna Bazar', name: 'Rahul Malhotra', contacts: '9310078977, 9312650259', address: '1860/1856, Jaat Fauji Dharamshala, Jamna Bazar Near Hanuman Mandir.', region: 'Delhi' },
      { location: 'Jhilmil', name: 'Kartik Chandak', contacts: '9310314729, 7048956133, 9312057899', address: 'A-10/8, Jhilmil Industrial Area, A Block Delhi.', region: 'Delhi' },
      { location: 'Kamla Market', name: 'Raman Rai', contacts: '01145002620, 9354210948', address: 'Shop No.196, Kamla Market Delhi.', region: 'Delhi' },
      { location: 'Karol Bagh', name: 'S.K.Oberi', contacts: '01141563899, 9868781291', address: '953-956/4, A-J, Chamber Jain Mandir Marg Naiwala, Karol Bagh Delhi.', region: 'Delhi' },
      { location: 'Karol Bagh', name: 'Nitish', contacts: '9716262379, 7011725125, 9310157739', address: '16/76, Gali No. 3, Faiz Road, Near Lal Mashid, Karol Bagh Delhi.', region: 'Delhi' },
      { location: 'Kashmere Gate', name: 'Ram Gopal', contacts: '9871340370, 9654790370, 9540337728', address: 'Shop NO. 768, Chabbi Ganj Kashmere Gate, Delhi-110006.', region: 'Delhi' },
      { location: 'Kashmere Gate', name: 'Vivek', contacts: '8800642300', address: 'Shop No.1/782, Nicalson Road, Near Axis Bank, Kashmere Gate, Delhi.', region: 'Delhi' },
      { location: 'Mangolpuri', name: 'Santosh Jha/Sachin', contacts: '9350848326, 7982429176, 9540366353', address: 'C-3 Oil Market, Industrial Area Phase-1 Mangolpuri Delhi.', region: 'Delhi' },
      { location: 'Narela', name: 'Raju Sharma', contacts: '9212066361, 9310066361', address: 'Plot No.66-58, Sec.B-4, Pocket-11, New Punjabi Colony, Narela.', region: 'Delhi' },
      { location: 'New Lajpat Rai Market', name: 'Ravi Anand', contacts: '9910231765', address: 'Shop No. 243, New Lajpat Rai Market Delhi.', region: 'Delhi' },
      { location: 'Sanjay Gandhi TPT', name: 'Parveen', contacts: '9643619245, 8744912011', address: 'C-29/1, Near Delhi Dharam Kata, Bass Balli Market.', region: 'Delhi' },
      { location: 'Shahdara', name: 'Krishna Sirohi', contacts: '9811353810, 8882018141, 8076856250', address: '10/115, Patel Gali, Main 60Ft. Road Vishwas Nagar Shahdra Delhi.', region: 'Delhi' },
      { location: 'Libaspur', name: 'Nitish Sharma', contacts: '9654304261, 9310103990, 9716262379', address: 'Gali No-9, Godown No-8, 66 Ft Road Near Power House, Libaspur.', region: 'Delhi' },
      { location: 'Wazirpur', name: 'S.K.Yadav', contacts: '01146124777, 9310036777', address: 'Shop No.B-28, Industrial Area Wazirpur Delhi.', region: 'Delhi' },
      { location: 'Zakhira', name: 'Govind', contacts: '9654499953, 8595340137, 9891648444', address: 'Shop No. 69-70, Chara Mandi Zakhira Delhi.', region: 'Delhi' },
      { location: 'Mayapuri', name: 'Sanjeev Kumar', contacts: '9310348176, 7861981008', address: 'D-197, Mayapuri, Indl. Area, Phase-2, New Delhi-110064.', region: 'Delhi' },

      // UTTAR PRADESH BOOKING OFFICES [cite: 2]
      { location: 'Agra', name: 'Yogesh Sharma', contacts: '9319967212, 9319567678', address: 'Naveen road Line, 21/35, Freeganj Road -Agra.', region: 'Uttar Pradesh' },
      { location: 'Aligarh', name: 'Ravi Singh', contacts: '8923569929, 8077722689', address: 'Sarai Sultani, Near Woolen Market Behind Axis Bank ATM, Aligarh.', region: 'Uttar Pradesh' },
      { location: 'Aligarh', name: 'Mukesh Singh', contacts: '8218391549, 8534930520', address: 'Tyagi Hospital Wali Gali, Opp. Vishwa Bharti School, Sasni Gate, Aligarh.', region: 'Uttar Pradesh' },
      { location: 'Baraut', name: 'Rajesh Kumar', contacts: '8920032367', address: 'Aminagar Sarai Road Near RK Industries Delhi Saharanpur Road Baraut.', region: 'Uttar Pradesh' },
      { location: 'Ghaziabad', name: 'B.K Joshi', contacts: '9218014723, 9212450050', address: 'K.R.S. Good Transport Co. Devi Mandir Road, Opp. Delhi Gate, Ghaziabad.', region: 'Uttar Pradesh' },
      { location: 'Hathras', name: 'Mukesh', contacts: '8218391549, 9897192922', address: 'Front of Bankey Bhawan Near Roadways Bys Stand Agra Road Hathras.', region: 'Uttar Pradesh' },
      { location: 'Meerut', name: 'Kamal Dingra', contacts: '8791138138, 9319233334', address: 'Shop No. 234, Transport Nagar Meerut.', region: 'Uttar Pradesh' },
      { location: 'Murad Nagar', name: 'Pawan', contacts: '8433202529, 9012544299', address: 'Purani Goods Mandi Muradnagar Near PNB Bank.', region: 'Uttar Pradesh' },
      { location: 'Noida', name: 'Parveen Gupta', contacts: '9218012535', address: 'Sector -5, Harola, Opp. Fire Station, Near Bharat Gas, Noida.', region: 'Uttar Pradesh' },
      { location: 'Saharanpur', name: 'Pradeep', contacts: '8279491175, 9758585333', address: 'C-345, Transport Nagar Dheradhun Road, Saharanpur.', region: 'Uttar Pradesh' },
      { location: 'Tronica City', name: 'J.N.Jha', contacts: '9718796134, 9643667885', address: 'Shop No.7, Panchlok, Pradhan Market Tronica City, Ghaziabad.', region: 'Uttar Pradesh' },
      { location: 'UP. Border-Godown-1', name: 'Ajay Tiwari', contacts: '9218303755', address: 'Near By Geeta Press Bharat Petrol Pump Metro Pillar No.158, Chikamberpur.', region: 'Uttar Pradesh' },
      { location: 'UP. Border-Godown-2', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No. 109 Gali No-2, Opposite Chaena Body Work UP.Border.', region: 'Uttar Pradesh' },
      { location: 'UP. Border-Godown-3', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No. 113 Gali No-3, Chakamberpur UP. Border.', region: 'Uttar Pradesh' },
      { location: 'UP. Border-Godown-4', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No 152 Opposite Indo Arya Compound UP.Border.', region: 'Uttar Pradesh' },

      // HARYANA BOOKING OFFICES [cite: 3]
      { location: 'Karnal', name: 'Ravi Singh', contacts: '9354113926', address: 'JSR Road Carrier S.L.O No. 26, Sec-3, HSIDC Karnal Haryana.', region: 'Haryana' },
      { location: 'Bhiwani', name: 'S.K Yadav', contacts: '9821051400, 9310036777', address: 'Bawre Gate Srkulr Road Near Parnami Mandir Bhiwani.', region: 'Haryana' },
      { location: 'Faridabad', name: 'Roshan Kumar', contacts: '8376005778, 9871634193', address: '17/6, Mathura Road Sarpanch Colony, Opp. Metro Pillar no. 755.', region: 'Haryana' },
      { location: 'Jagadari', name: 'Manoj Gulati', contacts: '9812000058', address: 'Plot No-98, Jesico Colony Jagadari Haryana-135003.', region: 'Haryana' },
      { location: 'Panipat', name: 'Narendra Malik', contacts: '9813180050, 8950103535', address: 'Plot No.201, Sector-25, Transport Nagar, Panipat.', region: 'Haryana' },

      // PUNJAB BOOKING OFFICES [cite: 3]
      { location: 'Chandigarh', name: 'Ganesh Attreya', contacts: '8847462925, 9876863807', address: '4, Transport Area Sector-26, Chandigarh.', region: 'Punjab' },
      { location: 'Baddi', name: 'Suresh', contacts: '9318796573, 7018267367', address: '90-91, Modern Complex Opp. Bhardwaj Hospital, Sai Road, Baddi.', region: 'Punjab' },
      { location: 'Amritsar', name: 'Jagdish', contacts: '9317706397, 7009566675', address: 'Ghee Mandi Chowk, Opp. Bank Balmiki Mandir Amritsar.', region: 'Punjab' },
      { location: 'Jalandar', name: 'Jyoti', contacts: '8729099489', address: 'Plot no. 5, Industrial Area, Jalandhar.', region: 'Punjab' },
      { location: 'Ludhiana', name: 'Vishal Rattan', contacts: '9915043477, 8427018808', address: 'Plot No. 2424-D, Libra Compound, Opp. JB. Kanta, Transport Nagar Ludhiana.', region: 'Punjab' },
      { location: 'Ludhiana City', name: 'Deepak', contacts: '9592901990', address: 'Iqbal Ganj Chowk.', region: 'Punjab' },
      { location: 'Ludhiana Gill Road', name: 'Abhishek', contacts: '9814916821, 01614626821', address: '592/2, Over Lock Road, Opp. B.R.M Tower Ludhiana.', region: 'Punjab' },
      { location: 'Ludhiana Sunder Nagar', name: 'Yogesh', contacts: '9317803769', address: '2677, Opp. King Palace, Sunder Nagar.', region: 'Punjab' },
      { location: 'Ludhiana Bahadur Ki Road', name: 'Naresh', contacts: '9592901986', address: 'SCO 107 Dana Mandi Bahadur Ke Road.', region: 'Punjab' },
      { location: 'Malerkotla', name: 'Mohit Kumar', contacts: '9041101520, 9316537000', address: 'Pawan Transport Industrial Area, Steel-02, Malerkotla.', region: 'Punjab' },
      { location: 'Phagwara', name: 'Sunil', contacts: '9815000327, 9988826128', address: 'Tarsam Transport Company, Hosiyarpur Road, Phagwara.', region: 'Punjab' },

      // GUJARAT BOOKING OFFICES [cite: 3]
      { location: 'Ahmedabad/Asalai', name: 'Rohtash Kumar', contacts: '9218303756, 9218303752', address: 'Block No-1600B/2 Daga Estate, NH-8, Jetalpur, Ahmedabad.', region: 'Gujarat' },
      { location: 'Ahmedabad City', name: 'Satish Jain', contacts: '9825647310', address: 'Near Big Bazar, Opp. Sani Mandir Kankaria Road, Ahmedabad.', region: 'Gujarat' },
      { location: 'Bhavnagar', name: 'Bhavesh', contacts: '9227050607, 9106590150', address: 'Near By Pooja Transport, Lathi Bazar, Bhavnagar.', region: 'Gujarat' },
      { location: 'Rajkot-I', name: 'D.K Sharma', contacts: '9601558842', address: 'Nayara Petrol Pump, Gondal Road, Rajkot.', region: 'Gujarat' },
      { location: 'Rajkot-II', name: 'D.K Sharma', contacts: '9601558842', address: 'Near Murlidhar Weigh Bridge, Bhumi Gate, Shapar.', region: 'Gujarat' },
      { location: 'Rajkot-III', name: 'D.K Sharma', contacts: '7802028842', address: 'Gate No-2, Near ICICI Bank GIDC, Metoda.', region: 'Gujarat' },
      { location: 'Dhoraji', name: 'Inder Sharma', contacts: '8758478737', address: 'Shop No-2, Near Radhika Marbal, Old Upleta Road, Dhoraji.', region: 'Gujarat' },
      { location: 'Jetpur', name: 'Ashok Jain', contacts: '9377891107, 9974179864', address: 'Rabarika Road, Malviya Industries Estate, Jetpur.', region: 'Gujarat' }
    ];

    const deliveryData = [
      // UTTAR PRADESH DELIVERY STATIONS [cite: 4]
      { location: 'Azamgarh', name: 'Amit', contacts: '8573028531, 9670002153', address: 'Qyampur Kotwa Near Kartikya Dharam Kata Azamgarh.', region: 'Uttar Pradesh' },
      { location: 'Ballia', name: 'Amarinder', contacts: '6393398663, 7355495329', address: 'Near Sanichari Mandir Bichala Ghat Police Chowki, Ballia.', region: 'Uttar Pradesh' },
      { location: 'Basti', name: 'Shubam Singh', contacts: '9598313110, 9838032391', address: 'Shubam TPT.Company Opp. Railway Mall Godown Basti.', region: 'Uttar Pradesh' },
      { location: 'Bhadohi', name: 'Mukesh Kumar', contacts: '9451019063', address: 'Maryad Patti Bhadohi.', region: 'Uttar Pradesh' },
      { location: 'Mohammdabad Gohna', name: 'Durgesh Tiwari', contacts: '9415261075, 7985528915', address: 'Near Calendar Tiraha Opp. BSNL Office Mohammadabad Gohna.', region: 'Uttar Pradesh' },
      { location: 'Mubarakpur', name: 'Ajju', contacts: '9838797151, 9235338174', address: 'Ali Nagar Chowk Mubarakpur, Distt-Azamgarh.', region: 'Uttar Pradesh' },
      { location: 'Belthara Road', name: 'Anjani Gupta', contacts: '8738967375, 9369126097', address: 'Bus Stand Near Belthara Road.', region: 'Uttar Pradesh' },
      { location: 'Faizabad', name: 'Ashish', contacts: '9415108075, 8303306859', address: 'Faizabad Road Lines.', region: 'Uttar Pradesh' },
      { location: 'Deoria', name: 'Salish Morhi', contacts: '9452628520, 9953639285', address: 'Morhi Transport Service, CC Road Pashuram Chowk.', region: 'Uttar Pradesh' },
      { location: 'Barhalganj', name: 'Balinder Singh', contacts: '9935303951, 8299704552', address: 'Gemini Transport Agency Near TVS Agency Barhalganj.', region: 'Uttar Pradesh' },
      { location: 'Gorakhpur', name: 'Manish Singh', contacts: '9936409920, 9336402820', address: 'Plot No.110, Near Golden Gas Service TPT Nagar, Gorakhpur.', region: 'Uttar Pradesh' },
      { location: 'Ghazipur', name: 'Manish Pathak', contacts: '9653091197', address: 'Katholi Jangirpur Road, Ghazipur.', region: 'Uttar Pradesh' },
      { location: 'Ghosi', name: 'Nitish Chaurasiya', contacts: '9336778875, 9936771986', address: 'Shabnam Transport Agency Station Road Ghosi.', region: 'Uttar Pradesh' },
      { location: 'Akbarpur/Ambedkar Nagar', name: 'Haji Mohd.Aleem', contacts: '9838387414, 9305301549', address: 'Faizabad Road (Near Tamsa Marg) Akbarpur.', region: 'Uttar Pradesh' },
      { location: 'Tanda', name: 'Imran Ahmed', contacts: '9721261909, 8052863688', address: 'Chander Lok Palace Haspur Road Tanda.', region: 'Uttar Pradesh' },
      { location: 'Gosiganj', name: 'Bishno Kumar', contacts: '9984613438, 9451429064', address: 'Bus Stand Gosiganj.', region: 'Uttar Pradesh' },
      { location: 'Jaunpur', name: 'Vimlesh Singh', contacts: '9140583858', address: 'Naiganj Near Dubey Dabha, Jaunpur.', region: 'Uttar Pradesh' },
      { location: 'Kanpur', name: 'Sansar Singh', contacts: '9839034102, 9336121866', address: '133/117-B Rattu Road Purwa Transport Nagar, Kanpur.', region: 'Uttar Pradesh' },
      { location: 'Lucknow', name: 'Sanjay Sharma', contacts: '8090408899, 9305182357', address: 'Aishbagh Malvea Nagar Chauraha Godown No.4 Lucknow.', region: 'Uttar Pradesh' },
      { location: 'Mau', name: 'PN Singh', contacts: '9839662682, 9648110080', address: 'UP Transport organization, Dhiti Mau.', region: 'Uttar Pradesh' },
      { location: 'Machhalishar', name: 'Virender Kumar', contacts: '8318905833, 7408353575', address: 'Kolkhara Post Machhalishar. Distt-Jaunpur.', region: 'Uttar Pradesh' },
      { location: 'Prayagraj', name: 'Ashish Yadav', contacts: '9956260183, 6307649750', address: 'Golden Roadways and Logistics 161B, TPT Nagar Prayagraj.', region: 'Uttar Pradesh' },
      { location: 'Rasara', name: 'Anjani Gupta', contacts: '8738967375, 9369126097', address: 'Ghoda Chauraha, Dhundehrawa, Rasara.', region: 'Uttar Pradesh' },
      { location: 'Sultanpur', name: 'Ashish Singh', contacts: '8957009006, 7007202258', address: 'Singh Transport, Shop no. 4, Transport nagar, Sultanpur.', region: 'Uttar Pradesh' },
      { location: 'Salempur', name: 'Meraj Abadullah', contacts: '9838667486, 9839628127', address: 'Gorakhpur Salempur Transport Company Salempur.', region: 'Uttar Pradesh' },
      { location: 'Varanasi', name: 'Rajinder Tiwari', contacts: '8318006032, 9451447199', address: 'Ray Compound Lahartara Transport Nagar, Varanasi.', region: 'Uttar Pradesh' },
      { location: 'Yusufpur', name: 'Golu Yadav', contacts: '8318498756, 8176834552', address: 'Salempur Mod Shiv Mandir, Gazipur- 233227.', region: 'Uttar Pradesh' },

      // GUJARAT/OTHER DELIVERY STATIONS [cite: 4]
      { location: 'Halol', name: 'Narender Chouhan', contacts: '8469643399', address: 'Near Ambika Transport, Rinki Chokdi, Halol GIDC.', region: 'Gujarat' },
      { location: 'Vapi', name: 'Kailash', contacts: '8530183005', address: 'Plot No.C-1-61/555, 100 Shed Area, GIDC, Vapi.', region: 'Gujarat' },
      { location: 'Surat', name: 'Kapil Joshi', contacts: '7622059038', address: 'Niyol Transport Nagar Niyol Gaw Niyol Chak Surat.', region: 'Gujarat' },
      { location: 'Bakrol', name: 'Rohit Choudhary', contacts: '9586189111', address: 'A/46 Paavan Industrial Park G-2, Bakrol Bujrang.', region: 'Gujarat' },

      // BIHAR DELIVERY STATIONS [cite: 5, 6]
      { location: 'Arrah', name: 'Prashant', contacts: '7004714121, 8092129400', address: 'Near Bus Stand, Bypass Road, Arrah.', region: 'Bihar' },
      { location: 'Araria Court', name: 'Amarnath Jha', contacts: '8002008495', address: 'Bus Stand Road Opp.LIC Office, Araria.', region: 'Bihar' },
      { location: 'Aurangabad', name: 'Shivpujan', contacts: '8210277984, 7870295974', address: 'Singha College Mod Old G.T Road Aurangabad.', region: 'Bihar' },
      { location: 'Bettiah', name: 'Dilip Kumar Singh', contacts: '8864090108', address: 'Chatthu Mistri Compound Power House Road Bethiah.', region: 'Bihar' },
      { location: 'Bhagalpur', name: 'DK Pandey', contacts: '6200286010, 9123251019', address: 'Behind Muslim High School Tatarpur, Bhagalpur.', region: 'Bihar' },
      { location: 'Brahmapur', name: 'Naryan Dutt', contacts: '9523555626', address: 'Chandra Dev Complex, Near Ojha Mobile Nine, Brahmpur Road.', region: 'Bihar' },
      { location: 'Begusarai', name: 'Ramanand Mahto', contacts: '8789280916, 8877690526', address: 'Ratanpur, Teliya Pokhra Road, Begusarai.', region: 'Bihar' },
      { location: 'Bhabhua', name: 'Avinash Pandey', contacts: '7564940582, 9905909226', address: 'Near Maruti Suzuki Agency Bhabua Road, Mohaniya.', region: 'Bihar' },
      { location: 'Buxer', name: 'Ravi Singh', contacts: '9431083952, 7903584873', address: 'Main Road, Near Power House, Charitra Van, Buxer.', region: 'Bihar' },
      { location: 'Biharsharif', name: 'Pintu', contacts: '8862830801', address: 'Pillar no.58 Near Bharat Gas Godown Biharsharif.', region: 'Bihar' },
      { location: 'Bihariganj', name: 'Pankaj Kumar', contacts: '7903994239, 7631723911', address: 'Station Road Bihariganj, Distt- Madhepura.', region: 'Bihar' },
      { location: 'Bihiya', name: 'Nagendra Ojha', contacts: '7677618842, 7070813494', address: 'Lotus School Sahib Tola Dock Bangla Road, Bihiya.', region: 'Bihar' },
      { location: 'Nawada', name: 'R.P Choudhary', contacts: '9304624234, 7015938250', address: 'Jal Mandir Road Nawada-805110.', region: 'Bihar' },
      { location: 'Chhapra', name: 'Abhishek Dubey', contacts: '7004978897, 9471289402', address: 'Garkha Dhala Road, Near DAV School, Chhapra.', region: 'Bihar' },
      { location: 'Darbhanga', name: 'A.K. Ojha', contacts: '9430063337, 7324972257', address: 'Shivdhara Chowk, Gehumi Road, Darbhanga.', region: 'Bihar' },
      { location: 'Daudnagar', name: 'Sarfu Din Ansari', contacts: '9934918807, 9955846775', address: 'Bhkhrwan Mod, Near Agarwal Arra Machine, Daudnagar.', region: 'Bihar' },
      { location: 'Dheri On Son', name: 'Naeem Bhai', contacts: '7004423430, 7004178486', address: 'Shahbad Kanta, Jakki Bigha Dehri On Son.', region: 'Bihar' },
      { location: 'Dumroan', name: 'Vinod Singh', contacts: '7488544044, 6202670918', address: 'Sumitra Collage Road, Near by Tiwari Computer.', region: 'Bihar' },
      { location: 'Forbisganj', name: 'Mintu Thakur', contacts: '9199490887, 9262754705', address: 'Godhiyare chok, Forbesganj.', region: 'Bihar' },
      { location: 'Gaya', name: 'Tannu Bhai', contacts: '9122333000, 9431263328', address: 'BN Jha Road Dr. Shiv Bachan Singh, Murarpur.', region: 'Bihar' },
      { location: 'Gopal Ganj', name: 'Shailesh Kumar', contacts: '9631866083', address: 'Hajiyapur Chowk, Gopal Ganj.', region: 'Bihar' },
      { location: 'Hajipur', name: 'Abhishek Dubey', contacts: '9123122697, 9471289402', address: 'Adalpur Balu Mandi Lalganj Road Hajipur.', region: 'Bihar' },
      { location: 'Jay Nagar', name: 'Abhay Kumar', contacts: '9097638196', address: 'Maxi Stand, Nearest Honda Agency, Jai Nagar.', region: 'Bihar' },
      { location: 'Jamui', name: 'Pawan Kumar', contacts: '9931671942', address: 'Bithalpur Road Near Mahavir Vatika, Jamui.', region: 'Bihar' },
      { location: 'Jhanjarpur', name: 'Mitendra Kumar', contacts: '9709527054', address: 'Kanhauli Road Jhanjarour, Madhubani.', region: 'Bihar' },
      { location: 'Lakhisarai', name: 'Shivam Kumar', contacts: '7004348160', address: 'Naya Bazar Astghaytti Pokhar, Lakhisarai.', region: 'Bihar' },
      { location: 'Kishanganj', name: 'Raj Kumar', contacts: '8972148637, 7604021111', address: 'Behind Caltex Chowk NH-31, Kishan Ganj.', region: 'Bihar' },
      { location: 'Katihar', name: 'K.P Singh', contacts: '7257072818, 8825112518', address: 'D.S Collage Road, Near Radiant Hospital.', region: 'Bihar' },
      { location: 'Kochas', name: 'Hemant', contacts: '7050645934, 9461533567', address: 'Near Indian Oil Petrol Pump, Denara Road.', region: 'Bihar' },
      { location: 'Khagariya', name: 'Robin Singh', contacts: '9939849201', address: 'By Pass Road, Khagariya Near Haiyan Thana.', region: 'Bihar' },
      { location: 'Madhubani', name: 'K.K.Ojha', contacts: '9931803001, 8210470557', address: 'Meena Bazar Madhubani.', region: 'Bihar' },
      { location: 'Madhepura', name: 'Ranjeet Kumar Singh', contacts: '7903486400', address: 'State Bank Road Near Hindustan General Store.', region: 'Bihar' },
      { location: 'Muzaffarpur', name: 'Nav Ratan Lal Mishra', contacts: '9431474737', address: 'Akhara Ghat Road, Old F.C.I. Muzaffarpur.', region: 'Bihar' },
      { location: 'Motihari', name: 'Narendra Kumar', contacts: '9430234856', address: 'Nakchhed Tola Near Sikariya Teachers Collage.', region: 'Bihar' },
      { location: 'Mairwa', name: 'Munna Singh', contacts: '9934435544, 9113463189', address: 'Medical Road Mairwa Near Kali Mata Mandir.', region: 'Bihar' },
      { location: 'Rafiganj', name: 'Sushil Akhter', contacts: '7488004756', address: 'Main Road Near Bus Stand Rafiganj.', region: 'Bihar' },
      { location: 'Raxaul', name: 'Vivek Tiwari', contacts: '9229767035', address: 'Rambeshwar Fruit Mandi Behind Bank of Baroda.', region: 'Bihar' },
      { location: 'Narkatiya Ganj', name: 'Munna Shrivastava', contacts: '9534298933, 9546987153', address: 'Behind Ramkant Gas Agency Narkatiya Ganj.', region: 'Bihar' },
      { location: 'Patna', name: 'Jamil Akhter', contacts: '7003158671, 7070980786', address: 'Metro Pillar no. 172, Gaya Road Bus Stand Patna.', region: 'Bihar' },
      { location: 'Gulabbagh/Purnia', name: 'Dulal Das', contacts: '9973321390', address: 'Gulabbagh, Zero Mile (PF Campas).', region: 'Bihar' },
      { location: 'Samastipur', name: 'Dipu Sinha', contacts: '7631829706, 6204028102', address: 'Pithiya Gachhi Samastipur.', region: 'Bihar' },
      { location: 'Sasaram', name: 'Vijay Singh', contacts: '7491948659, 8825187993', address: 'Panchshil Bhawan, Bolia Road, Sasaram.', region: 'Bihar' },
      { location: 'Sherghati', name: 'Adil Hussain', contacts: '9534567331, 8864051672', address: 'Kamla Market, Near Over Bridge, Sherghati.', region: 'Bihar' },
      { location: 'Sitamarhi', name: 'Avishek Kumar', contacts: '9540860425, 9267992951', address: 'Riga Road, Infront Of Sri Dwarika Vivah Bhawan.', region: 'Bihar' },
      { location: 'Siwan', name: 'Biresh Tiwari', contacts: '9955046792', address: 'Behind Tuntun Babu Petrol Pump, Adarsh Nagar.', region: 'Bihar' },
      { location: 'Saharsa', name: 'Ishtiaque Ahmed', contacts: '9430468528, 9939092236', address: 'Station Road, Chandni Chowk.', region: 'Bihar' },
      { location: 'Vikramganj', name: 'Abilash Kumar', contacts: '8271079043, 7667687436', address: 'Sararam Road Water Tanki Near Mahavir Mandir.', region: 'Bihar' },

      // JHARKHAND DELIVERY STATIONS [cite: 6]
      { location: 'Barhi', name: 'Rahul', contacts: '8285873749', address: 'Gaya Road Barhi, Jharkhand.', region: 'Jharkhand' },
      { location: 'Chas/Bokaro', name: 'Rana Singh', contacts: '9334210559, 7903255863', address: 'Purulia Road, Near Jagdamba Mandir, Chas.', region: 'Jharkhand' },
      { location: 'Lohardga', name: 'Sunil', contacts: '8789582299, 9608531115', address: 'Kishno More Santi Nagar, Lohardga.', region: 'Jharkhand' },
      { location: 'Daltenganj', name: 'Niklesh', contacts: '8709083006, 7488090923', address: 'Mushlim Mohalla River Side Ward No.30, Daltenganj.', region: 'Jharkhand' }
    ];

    await BookingOffice.insertMany(bookingData);
    await DeliveryOffice.insertMany(deliveryData);

    console.log(`🎉 Seeded ${bookingData.length} Booking and ${deliveryData.length} Delivery offices.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();