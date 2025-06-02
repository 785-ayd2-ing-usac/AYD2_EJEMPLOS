require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send({"mensaje":"Servidor Express funcionando"});
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
