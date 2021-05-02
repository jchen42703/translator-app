const cedict = require("./cedict.json");

/**
 * 
 * @param {String} word that you want to get information for 
 * @returns 
 */
function translateWord(word) {
    // if word is null then we just return 
    if (word == null) {
        return { "english": "Null input given.", "pinyin": "Null input given." };
    }
    // else check if traditonal or simplfied matches our word and return thatcd 
    for (var i = 0; i < cedict.length; i++) {
        if (word == cedict[i].traditional || word == cedict[i].simplfied) {
            return { "english": cedict[i].english, "pinyin": cedict[i].pinyin };
        }
    }
    return { "english": "Not found.", "pinyin": "Not found." };
}

module.exports = translateWord;
