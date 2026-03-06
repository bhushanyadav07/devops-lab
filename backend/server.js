const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://db:27017/devops");

const Message = mongoose.model("Message", { text: String });

app.get("/api", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post("/api", async (req, res) => {
  const msg = new Message({ text: req.body.text });
  await msg.save();
  res.send("Saved");
});

app.listen(5000, () => console.log("Backend is running"));