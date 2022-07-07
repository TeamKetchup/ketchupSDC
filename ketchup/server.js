require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./db/conn")
const cors = require("cors")


app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));


app.get('/', function (req, res) {
     res.sendFile(path.join("./my-app/public"));
   });


app.listen(process.env.API_PORT, () => {
     console.log(`Server is listening on port: ${process.env.API_PORT}`)
 })