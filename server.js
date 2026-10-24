import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://roadways-frontend.vercel.app",
  "https://goldenroadwaysandlogistics.com",
  "https://www.goldenroadwaysandlogistics.com",
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    console.warn("Blocked by CORS:", origin);
    callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// CORS first — handles OPTIONS preflight automatically
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => res.send("Backend is running!"));

// Ensure DB is connected before hitting API routes
app.use("/api", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/delivery", deliveryRoutes);

// Only listen locally; Vercel uses the exported app
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
