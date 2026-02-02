const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

(async () => {
  const hashed = await bcrypt.hash("sandy123", 10);

  await Admin.create({
  email: "admin2@beautycabin.com",
  password: hashed
});


  console.log("✅ Admin created");
  process.exit();
})();
