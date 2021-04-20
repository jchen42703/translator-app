const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { translate } = require("google-translate-api-browser");
// const readline = require("readline");


app.post("/translate/", async (req, res) => {
  // console.log(
  //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
  // );
  let translatedText = await translate(req.body.foreign, { to: "en" });
  // console.log("translated text: " + translatedText.text);
  res.send({ translated: translatedText.text });
  // res.end("Finished translating");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
