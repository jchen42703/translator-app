const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

// read in the filenode
const cedict = require("./cedict.json");

/**
 * 
 * @param {String} word that you want to get information for 
 * @returns 
 */
function translateWord(word) {
  for (var i = 0; i < cedict.length; i++) {
    if (word == cedict[i].traditional || word == cedict[i].simplfied) {
      // console.log("The word found is" + word);
      var translatedJson = { "english": cedict[i].english, "pinyin": cedict[i].pinyin };
      break;
    }
    else {
      var translatedJson = { "english": "Not found.", "pinyin": "Not found." };
    }

  }
  return translatedJson;
}



// return trasnlated word
app.post("/translate/", (req, res) => {
  console.log("You are using the dev api...");
  // console.log(
  //   `Foreign: ${req.body.foreign}, typeof: ${typeof req.body.foreign}`
  // );
  // take word to translate and returns json of translations
  var sendJson = translateWord(req.body.word);
  console.log("The word to translate is: " + req.body.word);
  console.log(sendJson);
  res.send(sendJson);
});

// return json information for the translation
app.get('/cedictionary', (req, res) => {
  // return database of our dictionary
  res.send(cedict);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));








