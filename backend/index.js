const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { translate } = require("google-translate-api-browser");
// const readline = require("readline");
app.use(bodyParser.json());

app.post("/", (req, res) => {
  translate(req.body.foreign, { to: "en" })
    .then((res) => {
      console.log(`Translated: ${res.text}`);
    })
    .catch((err) => {
      console.error(err);
    });
  res.end("Finished translating");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
