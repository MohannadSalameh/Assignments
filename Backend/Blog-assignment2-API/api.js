import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let posts = [
  {
    id: 4,
    title: "Mastering React.js",
    content:
      "React.js is a powerful library for building dynamic and responsive user interfaces.",
    author: "Alice Brown",
    date: "2025-05-12 T22:16:32.020Z",
  },
  {
    id: 5,
    title: "CSS Flexbox and Grid",
    content:
      "Learn how to create flexible and responsive layouts using CSS Flexbox and Grid.",
    author: "Michael Lee",
    date: "2025-05-10 T15:51:44.000Z",
  },
  {
    id: 6,
    title: "Database Design Basics",
    content:
      "A good database design is essential for creating scalable and efficient applications.",
    author: "Sarah Connor",
    date: "2025-05-09 T01:13:47.623Z",
  },
];


let lastId = 3;


app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) res.json(post);
  res.status(404).json({ error: "Post Not Found" });
});


app.post("/posts", (req, res) => {

  lastId++;
  const newPost = {
    id: lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  posts.push(newPost);

  res.status(202).json(newPost);
});



app.patch("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (posts) {

  const postObj = posts[postIndex];
  const updatedPost = {
    id: id,
    title: req.body.title || postObj.title,
    content: req.body.content || postObj.content,
    author: req.body.author || postObj.author,
    date: postObj.date,
  };

  posts[postIndex] = updatedPost;
  res.status(200).json(updatedPost);
  } else {
    res.status(404).json({ error: ` post id ${id} Not Found` });
  }
});



app.put("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex) {

    const postObj = posts[postIndex];
    const updatedPost = {
      id: id,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };

    posts[postIndex] = updatedPost;
    res.status(200).json(updatedPost);
  } else {
    res.status(404).json({ error: ` post id ${id} Not Found` });
  }
});



app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: `post id ${id} Not Found` });
  }
});



app.listen(port, () => {
  console.log("API Server running correctly");
});
