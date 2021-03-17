const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { translate } = require("google-translate-api-browser");
// const readline = require("readline");
app.use(bodyParser.json());

app.post("/translate/", async (req, res) => {
  let translatedText = await translate(req.body.foreign, { to: "en" });
  // .then((res) => {
  //   console.log(`Translated: ${res.text}`);
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
  console.log("translated text: " + translatedText);
  res.send({ translated: translatedText.text });
  // res.end("Finished translating");
});

// app.post("/content", (req, res) => {
//   var out = res.json();
//   var str = JSON.stringify(out, null, 2); // spacing level = 2

//   console.log(`Res: ${str}`);
//   res.close();
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
