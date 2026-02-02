const express = require("express");
const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// CREATE appointment (customer)
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ appointments (admin - protected)
router.get("/", authMiddleware, async (req, res) => {
  const data = await Appointment.find().sort({ createdAt: -1 });
  res.json(data);
});

// CONFIRM appointment
router.patch("/:id/confirm", authMiddleware, async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, {
    status: "Confirmed",
  });
  res.json({ success: true });
});

// DELETE appointment
router.delete("/:id", authMiddleware, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
