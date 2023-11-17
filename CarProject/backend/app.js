// app.js
const express = require('express');
const cors = require("cors");
const connecton = require("./config/db");

const port = 5000; 

const app = express();

connecton();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/auth", require("./routes/auth"));
app.use("/car", require("./routes/car"));



app.all("*", (req, res) => {
    return res.status(404).json({ error: "Page not found" });
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
