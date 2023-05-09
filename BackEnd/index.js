const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1597362",
  key: "f1bd761d44e816cb55ba",
  secret: "ce09f71b535810a920c3",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "ffff"
});

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "5b44853b-bb90-4446-a5cf-dd69c3287bdc" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});
// 
app.listen(3005, "192.168.39.31");