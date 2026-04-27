import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { promises as dns } from "dns";
import authRoutes from "./routes/authRoutes.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

// Connect DB
connectDB();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
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
};

app.use(cors(corsOptions));


// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;