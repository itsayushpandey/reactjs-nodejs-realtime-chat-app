// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/signup", async (req, res) => {
//   return {};
// });

// app.post("/login", async (req, res) => {
//   return {};
// });

// app.listen(3001);

const axios = require('axios');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put('https://api.chatengine.io/users/',
    {username: username, secret: username, first_name:username},
    {headers:{"private-key":"c30b9a73-1eb1-4fdf-b76d-48313d081db5"}}
    )
    return res.status(r.status).json(r.data)
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);