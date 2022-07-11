require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./db/conn")
const cors = require("cors")


const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())
app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join("./my-app/public"));
});

app.get("/api/products", async (_, res) => {
    try {
        await db.query('SELECT * FROM products', (error, results) => {
            console.log(results)
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/api/all", async (_, res) => {
    // const id = req.params.id
    try {
        await db.query('SELECT * FROM images INNER JOIN products ON images.product_id = products.id', (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id
    try {
        await db.query('SELECT * FROM images INNER JOIN products ON images.product_id = products.id WHERE product_id = $1', [id], (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/api/profileinfo/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/api/subscribedcommunities", async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('SELECT * FROM community', (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});




app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`)
})


// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// //Error handling
app.use((req, res) => {
    res.status(404).send("Not Found")
})