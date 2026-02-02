import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

/**
 * POST /bookings
 * Create new booking
 */
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /bookings
 * Get all bookings
 */
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
