INSERT INTO users (username,password,avatar,banner) VALUES ('greyes', 'password1', 'https://files.slack.com/files-pri/T1T555TL0-F03NBCF3FCM/ketchup__3_.jpg', 'https://img.freepik.com/free-vector/cute-tomatoes-soldier-fighting-with-sword-shield-cute-style-design-t-shirt-sticker-logo-element_152558-15903.jpg');
INSERT INTO community (name,category,banner,users_id) VALUES ('Lego', 'LEGO - Super Mario ', 'https://img.freepik.com/free-vector/cute-tomatoes-soldier-fighting-with-sword-shield-cute-style-design-t-shirt-sticker-logo-element_152558-15903.jpg', '1');
INSERT INTO subscriptions (users_id, community_id) VALUES ('1','1');
INSERT INTO posts (post_body,media,date,users_id,community_id) VALUES ('This is a post body', NULL, '2022-06-15 10:23:58', '1', '1');
INSERT INTO comments (comment_body,users_id,posts_id) VALUES ('This is a comment for the post', '1', '1');
