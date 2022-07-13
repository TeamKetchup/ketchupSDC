require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./db/conn")
const cors = require("cors")


app.use(cors())

app.use(express.json())
app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

app.get("/api/users", async (_, res) => {
    try {
        await db.query('SELECT * FROM users', (error, results) => {
            console.log(results) 
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
});


  // Get POSTS
  app.get("/api/posts", async (_, res) => {
    try {
        await db.query('SELECT * FROM posts', (error, results) => {
            console.log(results) 
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.error(error.message)
    }
  });

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


  // Create POST
  app.post("/api/create_post", async (req, res) => {
    try {
     const {post_body,media,date,users_id,community_id} = req.body
     console.log(req)
     await db.query('INSERT INTO posts (post_body,media,date,users_id,community_id) VALUES ($1, $2, $3, $4, $5)', [post_body,media,date,users_id,community_id], (error, results) => {
         console.log(req.body)
         res.status(200).send(`${req.body} post was added`)
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




app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on port: ${process.env.API_PORT}`)
})


// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// //Error handling
app.use((req, res) => {
    res.status(404).send("Not Found")
})
