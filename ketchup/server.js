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

app.use(express.json())
// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("public"));



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

app.post("/api/createprofile", upload.single("file"), async function (req, res, next) {
    try{
        const fileName = `avatar${Math.floor(Math.random() * 100000)}${req.file.originalname}`
        req.file.originalname = fileName;
        uploadFile(req.file.originalname, req.file.buffer);
        const returnedURL = `https://teamketchupv2.s3.amazonaws.com/${req.file.originalname}`
        console.log(req.body)
        await db.query(`INSERT INTO users (username, password, avatar, banner, bio) VALUES ('${req.body.username}', '${req.body.password}', '${returnedURL}', '${returnedURL}', '${req.body.bio}');`);
        res.json('Success')
    } catch (error) {
        if(error){
            res.json(error)
        }
    }
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

app.get("/api/users", async (_, res) => {
  try {
    await db.query("SELECT * FROM users", (error, results) => {
      console.log(results);
      res.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error.message);
  }
});
// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
// });
app.get("/api/login/:username/:password", async (req, res) => {
    try {
        // const {username, password} = req.body
        // const {rows} = await db
        const username = req.params.username
        const password = req.params.password
        const data = await db
            .query('SELECT * FROM users WHERE username = $1 AND password = $2;', [
                username,
                password
            ])
        res.send(data.rows)
        console.log(data.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.get("/api/products", async (_, res) => {
    try {
        await db.query('SELECT * FROM users', (error, results) => {
            console.log(results) 
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});



// =========================START POSTS SECTION=======================================
    // Get All POSTS
    app.get("/api/posts", async (req, res) => {
        try {
            await db.query('SELECT * FROM posts ORDER BY id DESC', (error, results) => {
                console.log(req) 
                res.status(200).json(results.rows)
            })
        } catch (error) {
            console.error(error.message)
        }
      });

      // Get single POST
    app.get("/api/posts/:id", async (req, res) => {

        try {
            const id = req.params.id
            await db.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
                console.log(results) 
                res.status(200).json(results.rows)
            })
        } catch (error) {
            console.error(error.message)
        }
      });

      // Get User POSTS
    app.get("/api/user_posts/:id", async (req, res) => {

        try {
            const id = req.body.users_id
            console.log(req.params.users_id)
            await db.query('SELECT * FROM posts WHERE users_id = $1', [id], (error, results) => {
                console.log(results) 
                res.status(200).json(results.rows)
            })
        } catch (error) {
            console.error(error.message)
        }
      });
      
    // Create POST
  app.post("/api/create_post", async (req, res) => {
    try {
        const {post_header, post_body,media,date,users_id,community_id} = req.body
        await db.query('INSERT INTO posts (post_header, post_body,media,date,users_id,community_id) VALUES ($1, $2, $3, $4, $5, $6)', [post_header, post_body,media,date,users_id,community_id], (error, results) => {
        console.log(req)
            res.status(200).send(`post was added`)

     })
     } catch (error) {
        console.error(error.message)
     }
 });

 app.put("/api/update_post/:id", async (req, res) => {
    try {
        const id = req.params.id
        const {post_header,post_body,media,date,users_id,community_id} = req.body
        
      await db.query(
            'UPDATE posts SET post_header = $1, post_body = $2, media = $3, date = $4, users_id = $5, community_id = $6 WHERE id = $7', [post_header,post_body,media,date,users_id,community_id, id], (err, results) => {
         console.log(req)
         res.status(200).send( `post was updated`)
     })
     } catch (error) {
        console.error(error.message)
     }
 });

 app.delete("/api/delete_post/:id", async (req, res) => {
    try {
        const id = req.params.id
        await db.query(
            'DELETE FROM posts WHERE id = $1', [id], (err, results) => {
             res.status(200).send(`post was deleted`)
     })
     } catch (error) {
        console.error(error.message)
     }
 });

// =========================END POSTS SECTION=======================================

// =========================START COMMENTS SECTION=======================================
   
  // Get Comments
  app.get("/api/comments", async (_, res) => {
    try {
        await db.query('SELECT * FROM comments', (error, results) => {
            console.log(results) 
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
  });



// Create Comments
   app.post("/api/create_comment", async (req, res) => {
    try {
     const {comment_body,users_id,posts_id} = req.body
     console.log(req)
     await db.query('INSERT INTO comments (comment_body,users_id,posts_id) VALUES ($1, $2, $3)', [comment_body,users_id,posts_id], (error, results) => {
         console.log(req.body)
         res.status(200).send(`${req.body} comment was added`)
     })
     } catch (error) {
        console.error(error.message)
     }
 });

 

 // =========================END COMMENTS SECTION=======================================

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

//get community info
app.get("/community/:community", async (req, res) => {

    try {
        let client = await db.connect();
        const communityName = req.params.community;
        await db.query('SELECT * FROM community WHERE name = $1', [communityName], (error, results) => {

            res.status(200).json(results.rows)
            client.release()
        })
    } catch (error) {
        console.error(error.message)
    }
});

//create community
app.post("/api/postcommunity", async (req, res) => {
    try {
        let client = await db.connect();
        const { name, category, banner, users_id } = req.body;
        const { rows } = await db.query('INSERT INTO community (name, category, banner, users_id) VALUES($1, $2, $3, $4) RETURNING*', [name, category, banner, users_id]);
        res.send({ data: (rows), message: "New community has been created" });
        console.log({ rows });
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
