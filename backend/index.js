const express = require("express");
const cors = require("cors");
const server = express();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Movies");
  console.log("db connected");
}

const movieSchema = new mongoose.Schema({
  Title: String,
  Poster: String,
  Year: String,
});

const Movies = mongoose.model("watchList", movieSchema);

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.post("/list", async (req, res) => {
  let movie = new Movies();
  movie.Title = req.body.details.Title;
  movie.Poster = req.body.details.Poster;
  movie.Year = req.body.details.Year;
  const doc = movie.save();
  console.log("req of server post", req);
  console.log("doc of server post", doc);
  res.json(doc);
});
// server.post("/delete", async (req, res) => {
//   res.json(req);
//   console.log("delte ex");
// });

server.get("/list", async (req, res) => {
  console.log("res");

  const docs = await Movies.find({});
  res.json(docs);
  console.log(docs);
});

const port = 8000;

server.listen(port, () => {
  console.log("serverstarted");
});
