require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./db/conn")
const cors = require("cors")
const AWS = require('aws-sdk');
const fs = require('fs');

app.use(cors())

app.use(express.json())
app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, 'build')));

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`,
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('Garrett.png')

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

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
        await db.query('SELECT * FROM images INNER JOIN products ON images.product_id = products.id WHERE product_id = $1',  [id], (error, results) => {
            
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
  });



app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on port: ${process.env.API_PORT}`)
})


// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

//Error handling
app.use((req, res) => {
    res.status(404).send("Not Found")
})