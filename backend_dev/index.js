const express = require("express");
const app = express();

app.use(express.json());

app.post("/translate/", (req, res) => {
  console.log("You are using the dev api...");
  // console.log(
  //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
  // );
  const sendJson = { translated: req.body.foreign };
  console.log(`Sending json.translated ${sendJson.translated}`);
  res.send(sendJson);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
