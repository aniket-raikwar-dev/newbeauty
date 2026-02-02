const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },

    // ✅ NEW: appointment status for admin
    status: {
      type: String,
      enum: ["Pending", "Confirmed"],
      default: "Pending"
    }
  },
  {
    // ✅ Better than manual createdAt
    timestamps: true
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
