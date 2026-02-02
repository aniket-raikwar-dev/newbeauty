const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const appointmentRoutes = require("./routes/appointment.routes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// Health check
app.get("/db-check", (req, res) => {
  res.json({ ok: true });
});

// Routes
app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
