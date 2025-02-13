const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = { message: "Hello, world!" };

app.get("/data", (req, res) => {
    res.json(data);
});

app.post("/update", (req, res) => {
    data = req.body;
    res.json({ status: "Updated", data });
});

app.listen(5000, () => console.log("Server running on port 5000"));
