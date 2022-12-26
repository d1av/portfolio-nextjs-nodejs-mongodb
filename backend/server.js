const express = require("express");
const dotenv = require("dotenv").config({ path: "./.env" });
const colors = require("colors");
var cors = require("cors");
const path = require("path");

const connectDB = require("./config/db.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//index of the API
app.get("/", (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

//about section route
app.use("/portfolio/en/about", require("./routes/aboutRoutes.js"));

//work section route
app.use("/portfolio/en/work", require("./routes/workRoutes.js"));

//skills section route
app.use("/portfolio/en/skills", require("./routes/skillsRoutes.js"));

//experiences section route
app.use("/portfolio/en/experiences", require("./routes/experiencesRoutes.js"));

//testimonials section route
app.use(
  "/portfolio/en/testimonials",
  require("./routes/testimonialsRoutes.js")
);
//FORM CONTACT
app.use("/portfolio/contact", require("./routes/formRoutes.js"));

// user Create and Login
app.use("/api/users", require("./routes/userRoutes"))

const PORT = process.env.PORT || 3001;
connectDB();

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
