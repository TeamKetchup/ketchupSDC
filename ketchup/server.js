require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/conn");
const cors = require("cors");
const AWS = require("aws-sdk");
const fs = require("fs");
const multer = require("multer");
const multerS3 = require("multer-s3");

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, 'build')));

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = (fileName, fileBuffer) => {
  // Read content from the file

  // Setting up S3 upload parameters
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

const deleteFile = (objectName) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${objectName}`,
  };

  s3.deleteObject(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File deleted successfully`);
  });
};

const upload = multer();

app.post("/api/avatar", upload.single("file"), function (req, res, next) {
    const fileName = `${Math.floor(Math.random() * 100000)}${req.file.originalname}`
    req.file.originalname = fileName;
    uploadFile(req.file.originalname, req.file.buffer)
  }
);

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

app.get("/api/products", async (_, res) => {
  try {
    await db.query("SELECT * FROM products", (error, results) => {
      console.log(results);
      res.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error.message);
  }
});
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

app.get("/api/allcommunities", async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('SELECT * FROM community', (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/api/subscribedcommunities/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('SELECT * FROM community WHERE users_id = $1', [id], (error, results) => {

            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});

//update Bio
app.patch("/api/bio/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const { bio } = req.body;
        const currentBio = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
        const bioObj = {
            bio: bio || currentBio.rows[0].bio
        }
        const updatedBio = await db.query('UPDATE users SET bio = $1 WHERE id = $2 RETURNING *', [bioObj.bio, req.params.id]);
        res.send(updatedBio.rows[0]);
        client.release()
    } catch (error) {
        res.send(error.message);
    }
})


app.get("/api/all", async (_, res) => {
  // const id = req.params.id
  try {
    await db.query(
      "SELECT * FROM images INNER JOIN products ON images.product_id = products.id",
      (error, results) => {
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.query(
      "SELECT * FROM images INNER JOIN products ON images.product_id = products.id WHERE product_id = $1",
      [id],
      (error, results) => {
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is listening on port: ${process.env.API_PORT}`);
});

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// //Error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
