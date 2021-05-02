const express = require("express");
const { translate } = require("google-translate-api-browser");
const translateWord = require("./src/translate");

const app = express();

app.use(express.json());

app.post("/translate/", async (req, res) => {
  switch (req.body.devMode) {
    case "regular":
      // console.log(
      //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
      // );
      let translatedText = await translate(req.body.foreign, { to: "en" });
      console.log("translated text: " + translatedText.text);
      res.send({ translated: translatedText.text });
      break;
    // longer output that preserves new lines by prepending the text to the 1st paragraph
    case "pre":
      console.log("You are using the dev api...");
      const noLineBreaksStr = req.body.foreign.replace(/\r?\n|\r/g, "");
      // console.log(
      //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
      // );
      const sendJson = {
        translated: noLineBreaksStr + noLineBreaksStr + req.body.foreign,
      };
      console.log(`Sending json.translated ${sendJson.translated}`);
      res.send(sendJson);
      break;
    default:
      // fail with no devMode
      res
        .status(400)
        .send("Please specify a correct devMode in the POST request.");
      break;
  }
});

// return translated word
app.post("/translateWord/", (req, res) => {
  const sendJson = translateWord(req.body.word);
  console.log("The word to translate is: " + req.body.word);
  console.log(sendJson);
  res.send(sendJson);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
