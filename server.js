import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { promises as dns } from "dns";
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

// Connect DB (IMPORTANT: call inside handler safe way in production)
connectDB();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://roadways-frontend.vercel.app",
  "https://goldenroadwaysandlogistics.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true,
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));




app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/delivery', deliveryRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




export default app;