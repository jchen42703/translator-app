const express = require("express");
const app = express();
const { translate } = require("google-translate-api-browser");
const translateWord = require("./src/translate");

app.use(express.json());

app.post("/translate/", async (req, res) => {
  // console.log(
  //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
  // );

  if (req.body.foreign == null) {
    res.send({
      translated:
        "API does not accept null as a proper 'foreign' input. This is most likely not the translated text.",
    });
    break;
  }

  let translatedText = await translate(req.body.foreign, { to: "en" });
  // console.log("translated text: " + translatedText.text);
  res.send({ translated: translatedText.text });
  // res.end("Finished translating");
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
