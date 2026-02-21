const router = require("express").Router();
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth.middleware");

// create
router.post("/", async (req, res) => {
  const a = await Appointment.create(req.body);
  res.json(a);
});

// admin read
router.get("/", auth, async (req, res) => {
  const data = await Appointment.find().sort({ createdAt: -1 });
  res.json(data);
});

router.patch("/:id/confirm", auth, async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, { status: "Confirmed" });
  res.json({ ok: true });
});

router.delete("/:id", auth, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
