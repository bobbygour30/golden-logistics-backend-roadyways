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
      // DELHI BOOKING OFFICES
      { location: 'Khanna Market', name: 'Mukesh', contacts: '01143502198, 9211726773, 9891146748', address: 'Shop No. 31,32 Khanna Market Delhi.', region: 'Delhi' },
      { location: 'Khanna Market', name: 'Mukesh', contacts: '9218014722', address: 'Shop. No-26 Khanna Market Delhi.', region: 'Delhi' },
      { location: 'Sadar Bazar', name: 'Shankar Sharma', contacts: '9313655806, 8368201954', address: 'Shop No.93-94 New Qutab Road Sadar Bazar Teliwara Delhi.', region: 'Delhi' },
      { location: 'Khera Kalan', name: 'DN Jha', contacts: '8368940586, 9650195301', address: 'KH.No.47/22, Radhe Radhe Gali Kava Transport Khera Kalan.', region: 'Delhi' },
      { location: 'Bawana', name: 'Deepak Sharma', contacts: '9555078167, 9911443996', address: '154/3, Firni Road, Opp.Indian Oil Petrol Pump, Bawana Industrial Area.', region: 'Delhi' },
      { location: 'Daya Basti', name: 'Sandeep', contacts: '9999674377', address: '19/310 Old Rohtak Road, Daya Basti, Near Furkania Masjid Delhi.', region: 'Delhi' },
      { location: 'Gandhi Nagar', name: 'Ajay Anand', contacts: '7834888503, 8057307837', address: '9/6 MAIN PUSHTA ROAD GANDHI NAGAR', region: 'Delhi' },
      { location: 'Gandhi Nagar', name: 'Ajay Anand', contacts: '8630659562, 8057307837', address: 'MAIN ROAD GANDHI NAGAR NEAR LOHE WALA PUL', region: 'Delhi' },
      { location: 'Jamna Bazar', name: 'Rahul Malhotra', contacts: '9310078977, 9312650259', address: '1860/1856, JAAT FAUJI DHARAMSHALA, JAMNA BAZAR NEAR HANUMAN MANDIR.', region: 'Delhi' },
      { location: 'Jhilmil', name: 'Kartik Chandak', contacts: '9310314729, 9899436668', address: 'A-10/12 OPP.EPFO OFFICE JHILMIL INDUSTRIAL AREA BEHIND DILSHAD GARDEN METRO STATION', region: 'Delhi' },
      { location: 'Kamla Market', name: 'Raman Rai', contacts: '01145002620, 9354210948', address: 'Shop No.196, Kamla Market Delhi.', region: 'Delhi' },
      { location: 'Karol Bagh', name: 'S.K.Oberi', contacts: '01141563899, 9868781291', address: '953-956/4, A-J, Chamber Jain Mandir Marg Naiwala , Karol Bagh Delhi', region: 'Delhi' },
      { location: 'Karol Bagh', name: 'Nitish', contacts: '9716262379, 7011725125, 9310157739', address: '16/76, Gali No. 3,Faiz Road , Near Lal Mashid, Karol Bagh Delhi', region: 'Delhi' },
      { location: 'Kashmere Gate', name: 'Ram Gopal', contacts: '9871340370, 9654790370, 9540337728', address: 'Shop NO. 768, Chabbi Ganj Kashmere Gate, Delhi-110006', region: 'Delhi' },
      { location: 'Kashmere Gate', name: 'Vivek', contacts: '8800642300', address: 'Shop No.1/782, Nicolason Road, Near Axis Bank, Kashmere Gate, Delhi', region: 'Delhi' },
      { location: 'Mangolpuri', name: 'Santosh Jha/Sachin', contacts: '9350848326, 7982429176, 9540366353', address: 'C-3 Oil Market , Industrial Area Phase-1 Mangolpuri Delhi.', region: 'Delhi' },
      { location: 'Narela', name: 'Raju Sharma', contacts: '9212066361, 9310066361', address: 'Plot No.66-58, Sec.B-4, Pocket -11, New Punjabi Colony, Near Lal Chowk, Narela.', region: 'Delhi' },
      { location: 'New Lajpat Rai Market', name: 'Ravi Anand', contacts: '9910231765', address: 'Shop No . 243, New Lajpat Rai Market Delhi.', region: 'Delhi' },
      { location: 'Sanjay Gandhi TPT', name: 'Parveen', contacts: '9643619245, 8744912011', address: 'C-29/1, Near Delhi Dharam Kata, Bass Balli Market . Namank Godown.', region: 'Delhi' },
      { location: 'Shahdara', name: 'Krishna Sirohi', contacts: '9811353810, 8882018141, 8076856250, 9999178551', address: '10/115, Patel Gali, Main 60Ft. Road Vishwas Nagar Shahdra Delhi.', region: 'Delhi' },
      { location: 'Libaspur', name: 'Nitish Sharma', contacts: '9654304261, 9310103990, 9716262379', address: 'Gali No-9, Godown No-8, 66 Ft Road Near Power House,Libaspur.', region: 'Delhi' },
      { location: 'Wazirpur', name: 'S.K.Yadav', contacts: '01146124777, 9310036777', address: 'Shop No.B-28, Industrial Area Wazirpur Delhi.', region: 'Delhi' },
      { location: 'Zakhira', name: 'Govind', contacts: '9654499953, 8595340137, 9891648444', address: 'Shop No. 69-70, Chara Mandi Zakhira Delhi.', region: 'Delhi' },
      { location: 'Mayapuri', name: 'Sanjeev Kumar', contacts: '9310348176, 7861981008', address: 'D-197, Mayapuri, Indl,Area, Phase-2, New Delhi-110064', region: 'Delhi' },
      { location: 'Mori Gate', name: 'Not Specified', contacts: '9218012537', address: '3901 , Hamilton Road.', region: 'Delhi' },
      { location: 'Sanjay Gandhi TPT Nagar', name: 'Not Specified', contacts: '9218012536', address: 'AG-88 Sanjay Gandhi Transport Nagar', region: 'Delhi' },

      // UTTAR PRADESH BOOKING OFFICES
      { location: 'Agra', name: 'Yogesh Sharma', contacts: '9319967212, 9319567678', address: 'Naveen road Line, 21/35 , Freeganj Road -Agra, Near VTC Transport Gorakhpur Godown.', region: 'Uttar Pradesh' },
      { location: 'Aligarh', name: 'Ravi Singh', contacts: '8923569929, 8077722689', address: 'Sarai Sultani, Near Woolen Market Behind Axis Bank ATM, Aligarh.', region: 'Uttar Pradesh' },
      { location: 'Aligarh', name: 'Mukesh Singh', contacts: '8218391549, 8534930520', address: 'Tyagi Hospital Wali Gali, Opp. Vishwa Bharti School, Sasni Gate, Aligarh.', region: 'Uttar Pradesh' },
      { location: 'Baraut', name: 'Rajesh Kumar', contacts: '8920032367', address: 'Aminagar Sarai Road Near RK Industries Delhi Saharanpur Road Baraut.', region: 'Uttar Pradesh' },
      { location: 'Ghaziabad', name: 'B.K Joshi', contacts: '9218014723, 9212450050', address: 'K.R.S. Good Transport Co. Devi Mandir Road, Opp. Delhi Gate, Ghaziabad.', region: 'Uttar Pradesh' },
      { location: 'Hathras', name: 'Mukesh', contacts: '8218391549, 9897192922', address: 'Front of Bankey Bhawan Near Roadways Bys Stand Agra Road Hathras.', region: 'Uttar Pradesh' },
      { location: 'Meerut', name: 'B.N Malhotra', contacts: '9358201260, 8755686841', address: 'Malhotra TPT. Shop No.266 Behind Sekho Petrol Pump TP Nagar Meerut.', region: 'Uttar Pradesh' },
      { location: 'Meerut', name: 'Kamal Dingra', contacts: '8791138138, 9319233334', address: 'Shop No. 234, Transport Nagar Meerut', region: 'Uttar Pradesh' },
      { location: 'Murad Nagar', name: 'Pawan', contacts: '8433202529, 9012544299', address: 'Purani Goods Mandi Muradnagar Near PNB Bank.', region: 'Uttar Pradesh' },
      { location: 'Noida', name: 'Parveen Gupta', contacts: '9218012535', address: 'SECTOR -5, HAROLA , OPP. FIRE STATION, NEAR BHARAT GAS, NOIDA.', region: 'Uttar Pradesh' },
      { location: 'Saharanpur', name: 'Pradeep', contacts: '8279491175, 9758585333', address: 'C-345, Transport Nagar Dheradhun Road, Saharanpur', region: 'Uttar Pradesh' },
      { location: 'Tronica City', name: 'J.N.Jha', contacts: '9718796134, 9643667885', address: 'Shop No.7, Panchlok, Pradhan Market Tronica City, Ghaziabad', region: 'Uttar Pradesh' },
      { location: 'UP. Border- Godown- 1', name: 'Ajay Tiwari', contacts: '9218303755', address: 'Near By Geeta Press Bharat Petrol Pump Metro Pillar No.158, Chikamberpur, U.P. Border', region: 'Uttar Pradesh' },
      { location: 'UP. Border- Godown- 2', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No. 109 Gali No- 2, Opposite Chaena Body Work UP.Border.', region: 'Uttar Pradesh' },
      { location: 'UP. Border- Godown- 3', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No. 113 Gali No- 3, Chakamberpur UP. Border.', region: 'Uttar Pradesh' },
      { location: 'UP. Border- Godown- 4', name: 'Vikas Kumar', contacts: '9218014724', address: 'Metro Pillar No 152 Opposite Indo Arya Compound UP.Border.', region: 'Uttar Pradesh' },

      // HARYANA BOOKING OFFICES
      { location: 'Karnal', name: 'Ravi Singh', contacts: '9354113926', address: 'JSR Road Carrier S.L.O No. 26, Sec-3,HSIDC Karnal Haryana.', region: 'Haryana' },
      { location: 'Bhiwani', name: 'S.K Yadav', contacts: '9821051400, 9310036777', address: 'Bawre Gate Skrul Road Near Parnami Mandir Bhiwani.', region: 'Haryana' },
      { location: 'Faridabad', name: 'Roshan Kumar', contacts: '8376005778, 9871634193', address: '17/6,Mathura Road Sarpanch Colony,Near Shree Ganesh Service Station, Oppo. Metro Pillar no. 755 Neelam Chowk', region: 'Haryana' },
      { location: 'Jagadari', name: 'Manoj Gulati', contacts: '9812000058', address: 'Plot No-98 , Jesico Colony Jagadari Haryana-135003', region: 'Haryana' },
      { location: 'Panipat', name: 'Narendra Malik', contacts: '9813180050, 8950103535', address: 'Plot No.201, Sector-25, Transport Nagar, Panipat.', region: 'Haryana' },

      // HIMACHAL PRADESH BOOKING OFFICES
      { location: 'Baddi', name: 'Suresh', contacts: '9318796573, 7018267367', address: '90-91,Modern Complex Opp. Bhardwaj Hospital,Sai Road ,Baddi', region: 'Himachal Pradesh' },

      // PUNJAB BOOKING OFFICES
      { location: 'Chandigarh', name: 'Ganesh Atreya', contacts: '8847462925, 9876863807', address: '4,Transport Area Sector-26, Chandigarh.', region: 'Punjab' },
      { location: 'Amritsar', name: 'Jagdish', contacts: '9317706397, 7009566675', address: 'Ghee Mandi Chowk, Opp. Bank Balmiki Mandir Amritsar.', region: 'Punjab' },
      { location: 'Jalandar', name: 'Jyoti', contacts: '8729099489', address: 'Plot no. 5, Industrial Area, Jalandhar.', region: 'Punjab' },
      { location: 'Ludhiana', name: 'Vishal Rattan', contacts: '9915043477, 8427018808', address: 'Golden Roadways & Logistics Pvt. Ltd.Plot No. 2424 -D , Libra Compound, Opp. JB. Kanta, Transport Naqar Area Ludhiana', region: 'Punjab' },
      { location: 'Ludhiana City', name: 'Deepak', contacts: '9592901990', address: 'Iqbal Ganj Chowk.', region: 'Punjab' },
      { location: 'Ludhiana Gill Road', name: 'Abhishek', contacts: '9814916821, 01614626821', address: '592/2, Over Lock Road , Opp. B.R.M Tower Ludhiana.', region: 'Punjab' },
      { location: 'Ludhiana Sunder Nagar', name: 'Yogesh', contacts: '9317803769', address: '2677, Opp. King Palace, Sunder Nagar.', region: 'Punjab' },
      { location: 'Ludhiana Bahadur Ki Road', name: 'Naresh', contacts: '9592901986', address: 'SCO 107 Dana Mandi Bahadur Ke Road', region: 'Punjab' },
      { location: 'Malerkotla', name: 'Mohit Kumar', contacts: '9041101520, 9316537000', address: 'Pawan Transport Industrial Area , Steel-02, Malerkotla.', region: 'Punjab' },
      { location: 'Phagwara', name: 'Sunil', contacts: '9815000327, 9988826128', address: 'Tarsam Transport Company, Hosiyarpur Road , Balmiki Chowk, Phagwara.', region: 'Punjab' },

      // GUJARAT BOOKING OFFICES
      { location: 'AHMEDADAD/ASALAI', name: 'ROHTASH KUMAR', contacts: '9218303752, 9218303756', address: 'BLOCK NO-1600B/2 DAGA ESTATE,ASALALI JETPLUR ROAD ASLALI - Pin Code-382427', region: 'Gujarat' },
      { location: 'AHMEDADAD CITY', name: 'SATISH JAIN', contacts: '9825647310', address: 'NEAR BIG BAZAR, OPP. SANI MANDIR KANKARIA ROAD, AHMEDABAD', region: 'Gujarat' },
      { location: 'BHAVNAGAR', name: 'BHAVESH', contacts: '9227050607, 7874974072', address: 'MAHARASTRA FREIGHT LINE OLD BUNDERROAD, BEHIND SANGAM CINEMA,BHAVNAGAR.', region: 'Gujarat' },
      { location: 'RAJKOT-I', name: 'D.K SHARMA', contacts: '9601558842', address: 'NAYARA PETROL PUMP, GONDAL ROAD, RAJKOT', region: 'Gujarat' },
      { location: 'RAJKOT-II', name: 'D.K SHARMA', contacts: '9601558842', address: 'NEAR MURLIDHAR WEIGH BRIDGE, BHUMI GATE, SHAPAR', region: 'Gujarat' },
      { location: 'RAJKOT-III', name: 'D.K SHARMA', contacts: '7802028842', address: 'GATENO-2, NEAR ICICI BANK GIDC, METODA', region: 'Gujarat' },
      { location: 'DHORA', name: 'JINDER SHARMA', contacts: '8758478737', address: 'SHOP NO-2, NEAR RADHIKA MARBAL, AND TILES OLD UPLETA ROAD, DHORA JI', region: 'Gujarat' },
      { location: 'JETPUR', name: 'ASHOK JAIN', contacts: '9377891107, 9974179864', address: 'RABARIKA ROAD, MALVIYA INDUSTRIES ESTATE, JETPUR.', region: 'Gujarat' },
      { location: 'HALOL', name: 'NARENDER CHOUHAN', contacts: '8469643399', address: 'NEAR BY AMBIKA TRANSPORT, OPP. BHAVNA ROADWAYS, RINKI CHOKDI, HALOL GIDC HALOL', region: 'Gujarat' },
      { location: 'VAPI', name: 'KAILASH', contacts: '8530183005', address: 'PLOT NO.C-1-61/555,100 SHED AREA, NEAR DUPEN LABORATORIES, OPP.JOHNSON & JOHNSON, GIDC,VAPI', region: 'Gujarat' },
      { location: 'SURAT', name: 'KAPIL JOSHI', contacts: '7622059038', address: 'Niyol Transport Nagar Niyol Gaw Niyol Chak Surat Godown No-4', region: 'Gujarat' },
      { location: 'BAKROL', name: 'ROHIT CHOUDHARY', contacts: '9586189111', address: 'A/46 Paavan Industrial Park G-2, Bakrol Bujrang, Pincode-382433', region: 'Gujarat' }
    ];

    const deliveryData = [
      // UTTAR PRADESH DELIVERY STATIONS
      { location: 'AZAMGARH', name: 'Amit', contacts: '8573028531, 9670002153', address: 'QYAMPUR KOTWA NEAR KARTIKYA DHARAM KATA AZAMGARH.', region: 'Uttar Pradesh' },
      { location: 'BALLIA', name: 'Amarinder', contacts: '6393398663, 7355495329', address: 'NEAR SANICHARI MANDIR BICHALA GHAT POLICE CHOWKI, BANDE PAR, BALLIA.', region: 'Uttar Pradesh' },
      { location: 'BASTI', name: 'Shubam Singh', contacts: '9598313110, 9838032391', address: 'SHUBAM TPT.COMPANY OPP. RAILWAY MALL GODOWN NIRMLI KUND BASTI.', region: 'Uttar Pradesh' },
      { location: 'MOHAMMADABAD GOHNA', name: 'Durgesh Tiwari', contacts: '9415261075, 7985528915', address: 'NEAR CALENDAR TIRAHAPP. BSNL OFFICE PS MOHAMMADABAD GOHNA', region: 'Uttar Pradesh' },
      { location: 'MUBARAKPUR', name: 'Ajju', contacts: '9838797151, 9235338174', address: 'ALI NAGAR CHOWK MUBARAKPUR,DISTT-AZAMGARH.', region: 'Uttar Pradesh' },
      { location: 'BELTHARA ROAD', name: 'Anjani Gupta', contacts: '8738967375, 9369126097', address: 'BUS STAND NEAR BELTHARA ROAD', region: 'Uttar Pradesh' },
      { location: 'FAIZABAD', name: 'Ashish', contacts: '9415108075, 8303306859', address: 'FAIZABAD ROAD LINES.', region: 'Uttar Pradesh' },
      { location: 'DEORIA', name: 'Salish Morhi', contacts: '9452628520, 9953639285', address: 'MORHI TRANSPORT SERVICE, CC ROAD PASHURAM CHOWK', region: 'Uttar Pradesh' },
      { location: 'BARHALGANJ', name: 'Balinder Singh', contacts: '9935303951, 8299704552', address: 'GEMINI TRANSPORT AGENCY NEAR TVS AGENCY BARHALGANJ.', region: 'Uttar Pradesh' },
      { location: 'GORAKHPUR', name: 'Manish Singh', contacts: '9936409920, 9336402820, 8182876979', address: 'PLOT NO.110, NEAR GOLDEN GAS SERVICE TPT NAGAR, GORAKHPUR.', region: 'Uttar Pradesh' },
      { location: 'GHAZIPUR', name: 'Manish Pathak', contacts: '9653091197', address: 'KATHOLI JANGIRPUR ROAD, GHAZIPUR.', region: 'Uttar Pradesh' },
      { location: 'GHOSI', name: 'Nitish Chaurasiya', contacts: '9336778875, 9936771986', address: 'SHABNAM TRANSPORT AGENCY STATION ROAD GHOSI', region: 'Uttar Pradesh' },
      { location: 'AKBARPUR/AMBEDKAR NAGAR', name: 'Haji Mohd.Aleem', contacts: '9838387414, 9305301549', address: 'FAIZABAD ROAD (NEAR TAMSA MARG) AKBARPUR,AMBEDKAR NAGAR.', region: 'Uttar Pradesh' },
      { location: 'TANDA', name: 'Imran Ahmed', contacts: '9721261909, 8052863688', address: 'CHANDER LOK PALACE HASPUR ROAD TANDA.', region: 'Uttar Pradesh' },
      { location: 'GOSIGANJ', name: 'Bishno Kumar', contacts: '9984613438, 9451429064', address: 'BUS STAND GOSIGANJ', region: 'Uttar Pradesh' },
      { location: 'JAUNPUR', name: 'Vimlesh Singh', contacts: '9140583858', address: 'NAIGANJ NEAR DUBEY DABHA,JAUNPUR', region: 'Uttar Pradesh' },
      { location: 'KANPUR', name: 'Sansar Singh', contacts: '9839034102, 9336121866', address: '133/117-B RATTU ROAD PURWA TRANSPOR NAGAR, KANPUR INDIAN OIL PETROL PUMP.KANPUR', region: 'Uttar Pradesh' },
      { location: 'LUCKNOW', name: 'Sanjay Sharma', contacts: '8090408899, 9305182357', address: 'AISHBAGH MALVEA NAGAR CHAURAHAGUPTA MARKET,GODOWN.NO.4 LUCKNOW', region: 'Uttar Pradesh' },
      { location: 'MAU', name: 'PN Singh', contacts: '9839662682, 9648110080', address: 'UP TRANSPORT ORGANIZATION, DHITI MAU.', region: 'Uttar Pradesh' },
      { location: 'MACHHALISHAR', name: 'Virender Kumar', contacts: '8318905833, 7408353575', address: 'KOLKHARA POST MACHHALISHAR.DISTT-JAUNPUR', region: 'Uttar Pradesh' },
      { location: 'PRAYAGRAJ', name: 'Ashish Yadav', contacts: '9956260183, 6307649750', address: 'GOLDEN ROADWAYS AND LOGISTICS PVT LTD,161B, TRANSPORT NAGAR PRAYAGRAJ', region: 'Uttar Pradesh' },
      { location: 'RASARA', name: 'Anjani Gupta', contacts: '8738967375, 9369126097', address: 'GHODA CHAURAAH, DHUNDEHRAWA, RASARA.', region: 'Uttar Pradesh' },
      { location: 'SULTANPUR', name: 'Ashish Singh', contacts: '8957009006, 7007202258', address: 'SINGH TRANSPORT, SHOP NO. - 4, TRANSPORT NAGAR, LUCKNOW ROAD, SULTANPUR.', region: 'Uttar Pradesh' },
      { location: 'SALEMPUR', name: 'Meraj Abadullah', contacts: '9838667486, 9839628127, 9125901832', address: 'GORAKHPUR SALEMPUR TRANSPORT COMPANY BANK OF BARODA SALEMPUR.', region: 'Uttar Pradesh' },
      { location: 'VARANASI', name: 'Rajinder Tiwari', contacts: '8318006032, 9451447199', address: 'RAY COMPOUND LAHARTARA TRANSPORT NAGAR, VARANASI', region: 'Uttar Pradesh' },
      { location: 'YUSUFPUR', name: 'Golu Yadav', contacts: '8318498756, 8176834552', address: 'SALEMPUR MOD SHIV MANDIR , GAZIPUR- 233227.', region: 'Uttar Pradesh' },
      { location: 'BIJNOR', name: 'Yashik Chawla', contacts: '9897856569', address: 'BIJNOR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'NETHAUR', name: 'Naim', contacts: '8475993523', address: 'NETHAUR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'NOORPUR', name: 'Arpit', contacts: '8864841706', address: 'NOORPUR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'NAJIBABAD', name: 'Ritu Bhushan', contacts: '9837053306', address: 'NAJIBABAD DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'SEOHARA', name: 'Agarwal', contacts: 'Not Specified', address: 'SEOHARA DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'NAGINA', name: 'Sahil', contacts: '6397159135, 8791789790', address: 'NAGINA DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'DHAMPUR', name: 'Sunny', contacts: '8534046789, 8865046789', address: 'DHAMPUR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'CHANDPUR', name: 'Lalit', contacts: '8218599853, 8791257268', address: 'CHANDPUR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'KIRTARPUR', name: 'Zubar', contacts: '8630467129', address: 'KIRTARPUR DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'MOHD TARIQ', name: 'Mohd Tariq', contacts: '8445438141', address: 'MOHD TARIQ DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'CHANDAUSI', name: 'Gagan', contacts: '9149347003, 9719320430', address: 'CHANDAUSI DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'BAHJOI', name: 'Harish', contacts: '9675271300, 8445093727', address: 'BAHJOI DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'MORADABAD', name: 'Pankit', contacts: '9758507001', address: 'MORADABAD DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'BAREILLY', name: 'Azeem', contacts: '7017197809, 8218688205', address: 'BAREILLY DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'PILIBHIT', name: 'Irfan', contacts: '6397215029, 8869059838', address: 'PILIBHIT DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'BAHERI', name: 'Wazid', contacts: '9286873976, 8279957082', address: 'BAHERI DISTRICT OFFICE', region: 'Uttar Pradesh' },
      { location: 'SHAHAJANPUR', name: 'Aman', contacts: '9453290722, 8707552809', address: 'SHAHAJANPUR DISTRICT OFFICE', region: 'Uttar Pradesh' },

      // BIHAR DELIVERY STATIONS
      { location: 'ARRAH', name: 'Prashant', contacts: '7004714121, 8092129400', address: 'NEAR BUS STAND,BYPASS ROAD, ARRAH.', region: 'Bihar' },
      { location: 'ARARIA COURT', name: 'Amarnath Jha', contacts: '8002008495', address: 'BUS STAND ROAD OPP.LIC OFFICE NEAR SANJAY MISHRA PETROL PUMP,ARARIA', region: 'Bihar' },
      { location: 'AURANGABAD', name: 'Shivpujan', contacts: '8210277984, 7870295974', address: 'SINGHA COLLEGE MOD OLD G.T ROAD AURANGABAD, PARWATI SADAN, BIHAR', region: 'Bihar' },
      { location: 'BETTIAH', name: 'Dilip Kumar Singh', contacts: '8864090108', address: 'CHATTHU MISTRI COMPOUND POWER HOUSE ROAD BETHIAH', region: 'Bihar' },
      { location: 'BHAGALPUR', name: 'DK Pandey', contacts: '6200286010, 9123251019', address: 'MOHIWALI CHAK, MELA MAIDAN ROAD, SHAHJANGI, BHAGALPUR-813313', region: 'Bihar' },
      { location: 'BRAHMAPUR', name: 'Naryan Dutt', contacts: '9523555626', address: 'CHANDRA DEV COMPLEX, NEAR OJHA MOBILE NINE, BRAHMPUR ROAD, CHAURASTA', region: 'Bihar' },
      { location: 'BEGUSARAI', name: 'Ramanand Mahto', contacts: '8789280916, 8877690526', address: 'RATANPUR, TELIYA POKHRA ROAD, G.D MALEDA KE PICE', region: 'Bihar' },
      { location: 'BHABHUA', name: 'Avinash Pandey', contacts: '7564940582, 9905909226', address: 'NEAR MARUTI SUZAKI AGENCY BHABUA ROAD ,MOHANIYA-821109', region: 'Bihar' },
      { location: 'BUXER', name: 'Ravi Singh', contacts: '9431083952, 7903584873', address: 'MAIN ROAD, NEAR BY POWER HOUSE, CHARITRA VAN, BUXER', region: 'Bihar' },
      { location: 'BIHARSHARIF', name: 'Pintu', contacts: '8862830801', address: 'PILLAR NO.58 NEAR BHARAT GAS GODOWN BIHARSHARIF.', region: 'Bihar' },
      { location: 'BIHARIGANJ', name: 'Pankaj Kumar', contacts: '7903994239, 7631723911', address: 'STATION ROAD BIHARIGANJ, DISTT- MADHEPURA', region: 'Bihar' },
      { location: 'BIHIYA', name: 'Nagendra Ojha', contacts: '7677618842, 7282072907', address: 'BHIYA CHAURASTA, MAIN ROAD, BILJI OFFICE NEAR POWER HOUSE', region: 'Bihar' },
      { location: 'NAWADA', name: 'R.P Choudhary', contacts: '9304624234, 7015938250', address: 'JAL MANDIR ROAD NAWADA-805110', region: 'Bihar' },
      { location: 'CHHAPRA', name: 'Abhishek Dubey', contacts: '7004978897, 9471289402', address: 'GARKHA DHALA ROAD, NEAR DAV SCHOOL NEWAJI TOLA ROAD, CHHAPRA.', region: 'Bihar' },
      { location: 'DARBHANGA', name: 'A.K. Ojha', contacts: '9430063337, 7324972257', address: 'SHIVDHARA CHOWK, GEHUMI ROAD NEAR HIGHWAY OVER BRIDGE, DARBHANGA', region: 'Bihar' },
      { location: 'DAUDNAGAR', name: 'Sarfu Din Ansari', contacts: '9934918807, 9955846775', address: 'BHKHRWAN MOD, NEAR AGARWAL ARRA MACHINE, DAUDNAGAR BIHAR-824113', region: 'Bihar' },
      { location: 'DHERI ON SON', name: 'Naeem Bhai', contacts: '7004423430, 7004178486', address: 'SHAHBAD KANTA, JAKKI BIGHDA DHERI ON SON', region: 'Bihar' },
      { location: 'DUMROAN', name: 'Vinod Singh', contacts: '7488544044, 6202670918', address: 'SUMITRA COLLAGE ROAD, NEAR BY TIWARI COMPUTER.', region: 'Bihar' },
      { location: 'FORBISGANJ', name: 'Mintu Thakur', contacts: '9199490887, 9262754705', address: 'GODHIYARE CHOK, FORBESGANJ.', region: 'Bihar' },
      { location: 'GAYA', name: 'Tannu Bhai', contacts: '9122333000, 9153587719, 9431263328', address: 'BN JHA ROAD DR. SHIV BACHAN SINGH,MURARPUR.', region: 'Bihar' },
      { location: 'GOPAL GANJ', name: 'Shailesh Kumar', contacts: '9631866083', address: 'HAJIYAPUR CHOWK, GOPAL GANJ.', region: 'Bihar' },
      { location: 'HAJIPUR', name: 'Abhishek Dubey', contacts: '9123122697, 9471289402', address: 'ADALPUR BALU MANDI LALGANJ ROAD HAJIPUR.', region: 'Bihar' },
      { location: 'JAY NAGAR', name: 'Abhay Kumar', contacts: '9097638196', address: 'MAXI STAND , NEAREST HONDA AGENCY , BUS STAND ROAD ,JAI NAGAR- 847226', region: 'Bihar' },
      { location: 'JAMUI', name: 'Pawan Kumar', contacts: '9931671942', address: 'BITHALPUR ROAD NEAR MAHAVIR , VATIKA VIVAH BHAWAN , JAMUI .', region: 'Bihar' },
      { location: 'JHANJARPUR', name: 'Mitendra Kumar', contacts: '9709527054', address: 'KANHAULI ROAD JHANJAROUR, MADHUBANI.', region: 'Bihar' },
      { location: 'LAKHISARAI', name: 'Shivam Kumar', contacts: '7004348160', address: 'NAYA BAZAR ASTGHAYTTI POKHAR, LAKHISARAI.', region: 'Bihar' },
      { location: 'KISHANGANJ', name: 'Raj Kumar', contacts: '8972148637, 7604021111', address: 'MRF TYRE SHOWROOM BEHIND CALTEX CHOWK NH-31, KISHAN GANJ, KNE.', region: 'Bihar' },
      { location: 'KATIHAR', name: 'K.P Singh', contacts: '7257072818, 8825112518', address: 'D.S COLLAGE ROAD, NEAR RADIANT HOSPITAL.', region: 'Bihar' },
      { location: 'KOCHAS', name: 'Hemant', contacts: '7050645934, 9461533567', address: 'NEAR INDIAN OIL PETROL PUMP & AKAHAND MEDICAL HOSPITAL, DENARA ROAD', region: 'Bihar' },
      { location: 'KHAGARIYA', name: 'Robin Singh', contacts: '9939849201', address: 'BY PASS ROAD, KHARGARIYA NEAR HAIYAN THANA.', region: 'Bihar' },
      { location: 'MADHUBANI', name: 'K.K.Ojha', contacts: '9931803001, 8210470557', address: 'MEENA BAZAR MADHUBANI', region: 'Bihar' },
      { location: 'MOHANIYA', name: 'Avinash Pandey', contacts: '7564940582, 9905909226', address: 'NEAR MARUTI SUZUKI AGENCY BHABUA ROAD ,MOHANIYA-821109', region: 'Bihar' },
      { location: 'MADHEPURA', name: 'Ranjeet Kumar Singh', contacts: '7903486400', address: 'STATE BANK ROAD NEAR DEVKI MART- 852113', region: 'Bihar' },
      { location: 'MUZAFFARPUR', name: 'Nav Ratan Lal Mishra', contacts: '9431474737', address: 'AKHARA GHAT ROAD, OLD F.C.I. NEAR RATNA BANQUET HALL, MUZAFFARPUR', region: 'Bihar' },
      { location: 'MOTIHARI', name: 'Narendra Kumar', contacts: '9430234856', address: 'NAKCHHED TOLA NEAR SIKARIYA TEACHERS TRANNING COLLAGE MOTIHARI-845401', region: 'Bihar' },
      { location: 'MAIRWA', name: 'Munna Singh', contacts: '9934435544, 9113463189', address: 'MEDICAL ROAD MAIRWA MOTICHAPAR MEAR KALI MATA MANDIR', region: 'Bihar' },
      { location: 'RAFIGANJ', name: 'Sushil Akhter', contacts: '7763954699', address: 'MAIN ROAD NEAR BUS STAND RAFIGANJ.', region: 'Bihar' },
      { location: 'RAXAUL', name: 'Vivek Tiwari', contacts: '9229767035, 9110972293', address: 'RAMBESHWAR FRUIT MANDI BEHIND BANK OF BARODA MAIN ROAD KOIRYA TOLA.', region: 'Bihar' },
      { location: 'NARKATIYA GANJ', name: 'Munna Shrivastava', contacts: '9534298933, 9546987153', address: 'BEHIND RAMKANT GAS AGENCY NARKATIYA GANJ', region: 'Bihar' },
      { location: 'PATNA', name: 'Jamil Akhter', contacts: '7003158671, 7070980786', address: 'METRO PILLAR NO. - 172, GAYA ROAD BUS STAND NEAR UMRO BANQUET HALL PATNA', region: 'Bihar' },
      { location: 'GULABBAGH', name: 'Dulal Das', contacts: '9973321390', address: 'GULABBAGH, ZERO MILE (PF CAMPAS)', region: 'Bihar' },
      { location: 'PURNIA', name: 'Dulal Das', contacts: '9973321390', address: 'GULABBAGH, ZERO MILE (PF CAMPAS)', region: 'Bihar' },
      { location: 'SAMASTIPUR', name: 'Dipu Sinha', contacts: '7631829706, 6204028102', address: 'PITHIYA GACHHI SAMASTIPUR', region: 'Bihar' },
      { location: 'SASARAM', name: 'Vijay Singh', contacts: '7491948659, 8825187993', address: 'PANCHSHIL BHAWAN, NEAR MAHENDRA TRACTOR AGENCY, BOLIA ROAD, SASARAM', region: 'Bihar' },
      { location: 'SHERGHATI', name: 'Adil Hussain', contacts: '9534567331, 8864051672', address: 'KAMLA MARKET, NEAR OVER BRIDGE, SHERGHATI.', region: 'Bihar' },
      { location: 'SITAMARHI', name: 'Avishek Kumar', contacts: '9540860425, 9267992951', address: 'RIGA ROAD, INFRONT OF SRI DWARIKA VIVAH BHAWAN, SITAMARHI', region: 'Bihar' },
      { location: 'SIWAN', name: 'Biresh Tiwari', contacts: '9113463189', address: 'BEHIND TUNTUN BABU PETROL PUMP NIRGUN PURAM, ADARSH NAGAR, SIWAN', region: 'Bihar' },
      { location: 'SAHARSA', name: 'Ishtiaque Ahmed', contacts: '9430468528, 9939092236', address: 'STATION ROAD, CHANDNI CHOWK, SANGHAM BIHAR HOTEL.', region: 'Bihar' },
      { location: 'VIKRAMGANJ', name: 'Abilash Kumar', contacts: '8271079043, 7667687436', address: 'SARARAM ROAD WATER TANKI NEAR MAHAVIR MANDIR VIKRAMGANJ.', region: 'Bihar' },

      // JHARKHAND DELIVERY STATIONS
      { location: 'BARHI', name: 'Rahul', contacts: '8285873749', address: 'GAYA ROAD BARHI , JHARKHAND.', region: 'Jharkhand' },
      { location: 'CHAS/BOKARO', name: 'Rana Singh', contacts: '9334210559, 7903255863', address: 'PURULIA ROAD,NEAR JAGDAMBA MANDIR TARA NAGAR, CHAS ,JHARKHAND', region: 'Jharkhand' },
      { location: 'LOHARDGA', name: 'Naushad', contacts: '9608531115', address: 'KISHNO MORE SANTI NAGAR,LOHARDGA.', region: 'Jharkhand' },
      { location: 'DALTENGANJ', name: 'Niklesh', contacts: '8709083006, 7488090923', address: 'MUSHLIM MOHALLA RIVER SIDE WARD NO.30, DALTENGANJ.', region: 'Jharkhand' },
      { location: 'DEOGHAR', name: 'Ganesh Gupta', contacts: '9122594401, 9431306176', address: 'KKN STADIUM CASTIER TOWN B DEOGHAR , JHARKHAND-818112', region: 'Jharkhand' },
      { location: 'DHANBAD', name: 'Vikash Pandey', contacts: '8409010935, 9065833558', address: 'GODHAR POWER HOUSE, OPP. INDIAN OIL PUMP, DHANBAD', region: 'Jharkhand' },
      { location: 'DUMKA', name: 'Manish Agrahari', contacts: '6204331767', address: 'GILANPARA , NEAR CHURCH , DUMKA - JHARKHAND.', region: 'Jharkhand' },
      { location: 'GARHWA', name: 'Pardeep', contacts: '7371074701', address: 'ROHILA ROAD GARHWA, SONPURWA', region: 'Jharkhand' },
      { location: 'GIRIDIH', name: 'Gaurabh Sinha', contacts: '7488824180', address: 'KOLDIH NEAR MAHINDRA SERVICE CENTRE GIRIDIH', region: 'Jharkhand' },
      { location: 'GUMLA', name: 'Sunil', contacts: '9608531115', address: 'LOHAR DAGHA ROAD, GUMLA THANA CHOWK VINA CINEMA HALL, GUMLA', region: 'Jharkhand' },
      { location: 'GODDA', name: 'Sushil Kumar', contacts: '7870208227', address: 'AT- GULZARBAGH SHIVPUR ROAD GODDA, NEAR CHAITI DURGA MANDIR,GODDA', region: 'Jharkhand' },
      { location: 'HAZARIBAGH', name: 'Shyam Bihari Singh', contacts: '7258966345', address: 'MALVIYA MARG NEAR SHKSHAM HOTEL HAZARIBAGH.', region: 'Jharkhand' },
      { location: 'JAMSHEDPUR/TATA', name: 'Danish', contacts: '9386081033', address: 'GOLDEN ROADWAYS & LOGISTICS PVT LTD ,MANGO BUS STAND NEAR NEW SAHU JI HOTEL JAMSHEDPUR TATANAGAR', region: 'Jharkhand' },
      { location: 'JHARIYA', name: 'Sanjeet Singh', contacts: '9470373355', address: 'SINDRI ROAD PHULARIBAG NEAR KATA GHAR INDRA CHOWK JHARIYA.', region: 'Jharkhand' },
      { location: 'JHUMRITALIYA', name: 'D.N.Jha', contacts: '7004248635', address: 'OPPOSITE ADITYAVISION RANCHI PATNA ROAD, JHUMRITELAIYA KODRMA.', region: 'Jharkhand' },
      { location: 'MADHUPUR', name: 'Danish', contacts: '8825351408', address: 'KASUM BHAWAN PANAH KOLA ROAD, MADHUPUR-815353', region: 'Jharkhand' },
      { location: 'PHUSRO', name: 'Ashutosh', contacts: '8340500805', address: 'BHOOT BANGLA,NEAR MAHAVIR MANDER PHUSRO BERMO ,BOKARO, JHARKHAND-829144', region: 'Jharkhand' },
      { location: 'RAMGARH', name: 'Randhir Singh', contacts: '9572170887', address: 'NEHRU ROAD NEAR SHIV MANDIR, RAMGARH', region: 'Jharkhand' },
      { location: 'RANCHI', name: 'Anil Tiwari', contacts: '8804532046', address: 'MAIN ROAD MAYA TOLI , SIMALIYA RATU', region: 'Jharkhand' },
      { location: 'SIMDEGA', name: 'Niraj Sharma', contacts: '6204036372', address: 'GOLDEN ROADWAYS & LOGISTICS PVT. LTD. IDGAH MUHALLA INFRONT OF MAKKA MASZID SIMDEGA (JHARKHAND)', region: 'Jharkhand' },

      // WEST BENGAL DELIVERY STATIONS
      { location: 'ASANSOL', name: 'Zahid Malik', contacts: '8768000055, 9851990270, 9434037270', address: '49 G.T ROAD, MALLICK MANSION NEAR GUJRATI SCHOOL THE HORIZONE BLOCK-B ASANSOL', region: 'West Bengal' },
      { location: 'BANKURA', name: 'Arghya Tiwari', contacts: '7602148274', address: 'STALL NO 1, TAMLIBANDH BUS STAND BESIDE NEW GRAND MOBILE', region: 'West Bengal' },
      { location: 'BURDWAN', name: 'Rabindra Shaw', contacts: '9333766059, 8768000055', address: 'TELIPUKUR MIRCHOBA RAM MUDI COLONY PURBA BURDWAN 713103.', region: 'West Bengal' },
      { location: 'GANGARAMPUR', name: 'Rajesh Prasad', contacts: '7063333529, 7384164821', address: 'GANGARAMPUR BARA BAZAR DAKHIN DINAJPUR.', region: 'West Bengal' },
      { location: 'KALIACHAK', name: 'Rahul Choudhary', contacts: '8617483504', address: 'BALIADANGA MORE KALICHACK.', region: 'West Bengal' },
      { location: 'KALIYAGANJ', name: 'Prabin Kumar', contacts: '9832080051, 8637063668', address: 'GOLDEN TRANSPORT ,MANIK DHARAM KANTA ,HIGH ROAD ,NEAR BADSHA HOTEL ,PO_RAIGANJ ,DIST_NORTH DINAJPUR ,WEST BENGAL', region: 'West Bengal' },
      { location: 'MALDA', name: 'P Ghosh', contacts: '9775858867, 8768670511', address: 'M K ROAD, MALDA.', region: 'West Bengal' },
      { location: 'RAIGANJ', name: 'Prabin Kumar', contacts: '9832080051, 8637063668', address: 'MEEN BHAWAN NEAR POWER HOUSE RAIGANJ.DISTT-NORTH DINAJPUR-733134', region: 'West Bengal' },
      { location: 'SAMSI', name: 'Sunil', contacts: '9563252865', address: 'CHANCHAL SUKONTA MODE.', region: 'West Bengal' },
      { location: 'CHANCHAL', name: 'Sunil', contacts: '9563252865', address: 'CHANCHAL SUKONTA MODE.', region: 'West Bengal' },
      { location: 'MURSHIDABAD', name: 'Viswajit Dass', contacts: '8906709842, 8250871046', address: 'MURSHIDABAD PIN CODE-742102', region: 'West Bengal' },
      { location: 'BERHAMPORE', name: 'Viswajit Dass', contacts: '8906709842, 8250871046', address: 'MURSHIDABAD PIN CODE-742102', region: 'West Bengal' },
      { location: 'RAGHUNATH GANJ', name: 'Viswajit Dass', contacts: '8906709842, 8250871046', address: 'CASSIM BAZAR NEAR SANTHI SANGHA CLUB.', region: 'West Bengal' },
      { location: 'ALIPURDUAR', name: 'Sanjay Yadav', contacts: '8373070474, 8016972072', address: 'MARWARI PATTI ,MAYA CHOKIS ROAD, ALIPURDUAR', region: 'West Bengal' },
      { location: 'DHUPGURI', name: 'Shyamal Dutta', contacts: '8609786861, 7384441375', address: 'MARWARI PATTI ,MAYA CHOKIS ROAD, ALIPURDUAR', region: 'West Bengal' },
      { location: 'FALAKATA', name: 'Shyamal Dutta', contacts: '8609786861, 7384441375', address: 'MARWARI PATTI ,MAYA CHOKIS ROAD, ALIPURDUAR', region: 'West Bengal' },
      { location: 'JALPAIGURI', name: 'Shyamal Dutta', contacts: '8609786861, 7384441375', address: 'MARWARI PATTI ,MAYA CHOKIS ROAD, ALIPURDUAR', region: 'West Bengal' },
      { location: 'MAYNAGURI', name: 'Shyamal Dutta', contacts: '8609786861, 7384441375', address: 'MARWARI PATTI ,MAYA CHOKIS ROAD, ALIPURDUAR', region: 'West Bengal' },
      { location: 'COOCHBEHAR', name: 'Sanjay Yadav', contacts: '8373070474, 8016972072', address: 'S.N. ROAD, DURGABARI ,NEAR EKTA MARBLE HOUSE.', region: 'West Bengal' },
      { location: 'DINHATA', name: 'Sanjay Yadav', contacts: '8373070474, 8016972072', address: 'S.N. ROAD, DURGABARI ,NEAR EKTA MARBLE HOUSE.', region: 'West Bengal' },
      { location: 'MATHABHANGA', name: 'Sanjay Yadav', contacts: '8373070474, 8016972072', address: 'S.N. ROAD, DURGABARI ,NEAR EKTA MARBLE HOUSE.', region: 'West Bengal' },
      { location: 'TUFANGANJ', name: 'Sanjay Yadav', contacts: '8373070474, 8016972072', address: 'S.N. ROAD, DURGABARI ,NEAR EKTA MARBLE HOUSE.', region: 'West Bengal' },
      { location: 'DALKOLA', name: 'Paritosh', contacts: '8250860792, 9563650663', address: 'MALIKPUR, UTTAM DINAJPUR, WEST BENGAL, PIN -733201', region: 'West Bengal' },
      { location: 'ISLAMPUR', name: 'Chandan', contacts: '8617035502, 9851050152, 9800368222', address: 'PURATAN PALLY,MANDAL GOLA,NEAR COPARATI CINEMA HALL,ISLAMPUR', region: 'West Bengal' },
      { location: 'SILLIGURI', name: 'Raghav Sharma', contacts: '9933388301', address: 'SUMAN TEA WAREHOUSE, SEVOKE ROAD,SILLIGURI', region: 'West Bengal' },

      // ASSAM DELIVERY STATIONS
      { location: 'BILASIPARA', name: 'Surajit Sankar Paul', contacts: '8822986940, 9954000946', address: 'WARD NO-2, P.O BILASIPARA , DISTT-DHUBRI -ASSAM ,PIN-783348, NEAR SUVASHPALLY ,SHIV MANDIR.', region: 'Assam' },
      { location: 'BONGAIGOAN', name: 'Santosh Kumar', contacts: '7002321826, 9435021816', address: 'PAGLA SATHAN KRISHNA MILL COMPOUND BONGAIGAON', region: 'Assam' },
      { location: 'BARPETA ROAD', name: 'Sujit Saha', contacts: '7002310595', address: 'SIMLAGURI BARPETA ROAD', region: 'Assam' },
      { location: 'NALBARI', name: 'Monu Shaikh', contacts: '8638710690', address: 'NAILBARI BHAGATPARA ROAD WARD NO.2', region: 'Assam' },
      { location: 'DHUBRI', name: 'S.P. yadav', contacts: '8638662023', address: 'LAL MILL COMPOUND WARD NO. 3 BALUCHAR DHUBRI-783301', region: 'Assam' },
      { location: 'GOALPARA', name: 'Pandit', contacts: '7002089858, 6000948805', address: 'NEAR BORO BAZAR THAKUR BARI GOALPARA', region: 'Assam' },
      { location: 'KRISHNAI', name: 'Azizul Ali', contacts: '9101766983', address: 'KRISHNAI GODOWN BURGABARI', region: 'Assam' },
      { location: 'KOKRAJHAR', name: 'Satya Deo Mandal', contacts: '9435643569', address: 'BAZAR ROAD KOKRAJHAR.', region: 'Assam' },

      // TELANGANA DELIVERY STATIONS
      { location: 'HYDERABAD', name: 'DD CHOUDHARY', contacts: '9218303790', address: 'DOOR NO-14-8-308/24 JUMERAAT BAZA GROUND HYDREABAD PIN CODE-500012 TELANGANA', region: 'Telangana' },
      { location: 'SIDDIPET', name: 'CH. SRINIVAS', contacts: '8341234298', address: 'H.NO.-15-1-3/B VASAVI NAGAR NEAR ,MYSAMMA TEMPLE,SIDDIPET PIN CODE-502103 TELANGANA', region: 'Telangana' },
      { location: 'KARIM NAGAR', name: 'GANJI VENU', contacts: '9948994216', address: 'H.NO.8-82/5/2/C/1 NEAR BY PASS FLY OVER, VIJAY NAGAR COLONY-5 KRISHNA NAGAR BOMMAKAL KARIM NAGAR PIN CODE-505001 TELANGANA', region: 'Telangana' },
      { location: 'JAGITAL', name: 'RAI SRIDHAR', contacts: '9866004859', address: 'H.NO.4-4-177 NEAR MANCHI NELLABVI GANESH NAGAR NIZAMABAD ROAD JAGITAL PIN CODE-505327 TELANGANA', region: 'Telangana' },

      // ANDHRA PRADESH DELIVERY STATIONS
      { location: 'VIJAYWADA', name: 'V. BHARADWAJA', contacts: '8501074722', address: 'IRON YARD RAMALAYAM ROAD BHAVANIPURAM VIJAYAWADA, PIN CODE-520012 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'ANANTAPUR', name: 'M.CHAKRAPANI', contacts: '9392201516, 8977998687', address: 'H.NO-19-3-531-22 , BHAVANI NAGAR NTR MARG 80 FEET ROAD ANANTAPUR PIN CODE-515001 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'VIZIANAGARAM', name: 'SURESH/GANESH', contacts: '9666210325, 9492454183', address: 'D NO.4-8-29 PUVVADA GODOWNS KOTHAGRAHARAM 5TH LANE VIZIANAGARAM PIN CODE-535004 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'SRIKAKULAM', name: 'SUDHAKAR', contacts: '9642619842', address: 'BESIDE SRI VINAYAKA TEMPLE GT ROAD SRIKAKULAM PIN CODE-532001 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'NANDYAL', name: 'N A HAMEED', contacts: '7799555786', address: 'DOOR NO-21-452 FAROOQ NAGAR BY PASS NANDYAL PIN CODE-518501 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'RAJAHMUNDRY', name: 'SATISH', contacts: '9030351769, 9494090382', address: 'SHOP NO-D-37/ B FOUTH LINE, SVG MARKET, RAJAHMUNDRY PIN CODE-518501 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'PODDATUR', name: 'B.SHIV SHANKAR', contacts: '7396726472', address: 'MONDAY BAZAR NEAR HARINIWAS PRODDATUR REDDY MONDALAM PIN CODE-516361 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'HINDUPUR', name: 'B.RAMESH BABU', contacts: '9248031743', address: 'D NO -4-1-224, NEAR OPPOSITE OLD MORE SUPER MARKET RAILWAY STATION ROAD HINDUPUR ,SATHYASAI PIN CODE-515201 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'KADAPA', name: 'SREENIVASULU', contacts: '7989239682', address: 'D-N,15/207 RAMESH GODOWN BALLARY ROAD KADAPA PIN CODE-516001 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'KURNOOL', name: 'IMRAN', contacts: '9963224213', address: 'SANTOSH NAGAR BESIDE TATA MOTORS KURNOOL PIN CODE-518002 ANDHRA PRADESH', region: 'Andhra Pradesh' },
      { location: 'VISAKHAPATNAM', name: 'BABA PRASAD', contacts: '8886197266', address: 'AKKAYYAPALEM,OPP.CROWN BAKERY PIN CODE-500016 ANDHRA PRADESH', region: 'Andhra Pradesh' }
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