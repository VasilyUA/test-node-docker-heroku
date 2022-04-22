const express = require("express");
const cors = require("cors");
const db = require("./db/mongo");
const Item = require("./models/items");
const app = express();

db();
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());

app.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => res.json({ item: `Error: ${err}` }));
});

app.get("/search", async (req, res) => {
  const query = req.query.title;
  Item.find({ title: { $regex: new RegExp(query) } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/", (req, res) => {
  const title = req.body.title;
  const tasks = req.body.tasks || [];

  if (!title) return res.json({ item: `Error validation!` });

  if (typeof title !== "string" || typeof tasks !== "object")
    return res.json({ item: `Error validation!` });

  const newItem = new Item({ title, tasks });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.json({ item: `Error: ${err}` }));
});

app.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ id: req.params.id })))
    .catch((err) => res.json({ item: `Error: ${err}` }));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
