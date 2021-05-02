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


module.exports = translateWord;