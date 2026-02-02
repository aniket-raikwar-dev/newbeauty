const express = require("express");
const Appointment = require("../models/Appointment");
const verifyAdmin = require("../middleware/auth.middleware");

const router = express.Router();

// CREATE appointment (Customer)
router.post("/", async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json(appointment);
});

// READ appointments (Admin)
router.get("/", verifyAdmin, async (req, res) => {
  const data = await Appointment.find().sort({ createdAt: -1 });
  res.json(data);
});

// CONFIRM appointment
router.patch("/:id/confirm", verifyAdmin, async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, {
    status: "Confirmed"
  });
  res.json({ success: true });
});

// DELETE appointment
router.delete("/:id", verifyAdmin, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
