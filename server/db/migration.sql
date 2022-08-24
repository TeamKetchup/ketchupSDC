-- DROP DATABASE IF EXISTS ketchup_db;

-- CREATE DATABASE ketchup_db;
-- \l
-- \c ketchup_db;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS community CASCADE;
DROP TABLE IF EXISTS subscriptions CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
-- DROP TABLE IF EXISTS attachments CASCADE;

CREATE TABLE users(
   id SERIAL PRIMARY KEY NOT NULL,
   username VARCHAR,
   password TEXT,
   avatar TEXT,
   banner TEXT,
   bio TEXT
);



CREATE TABLE community(
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT NOT NULL,
   category TEXT NOT NULL,
   banner TEXT NOT NULL,
   users_id INT REFERENCES users(id)
);



CREATE TABLE subscriptions(
   users_id INT REFERENCES users(id),
   community_id INT REFERENCES community(id)
);



CREATE TABLE posts(
   id SERIAL PRIMARY KEY NOT NULL,
   post_header TEXT NOT NULL,
   post_body TEXT NOT NULL,
   img VARCHAR NULL,
   video VARCHAR NULL,
   -- date timestamp with time zone NOT NULL,
   users_id INT REFERENCES users(id),
   community_id INT REFERENCES community(id)

);



CREATE TABLE comments(
   id SERIAL PRIMARY KEY NOT NULL,
   comment_body TEXT NOT NULL,
   users_id INT REFERENCES users(id),
   posts_id INT REFERENCES posts(id)
);



-- CREATE TABLE attachments(
--    id SERIAL PRIMARY KEY NOT NULL,
--    attach_url TEXT NOT NULL,
--    user_id INT REFERENCES user(id)
--    post_id INT REFERENCES post(id)
-- );

\i db/seed.sql --runs the seed file

SELECT * FROM users;
SELECT * FROM community;
SELECT * FROM subscriptions;
SELECT * FROM posts;
SELECT * FROM comments;
-- SELECT * FROM attachments;

\d
\dt
\d users
\d community
\d subscriptions
\d posts
\d comments
-- \d attachments