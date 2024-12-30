const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
const corsOption = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOption));

connectDB();
app.use(express.json());

app.use("/api/user", require("./routes/UserRoute"));

const PORT = 8004;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
