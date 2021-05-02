const translateWord = require("../translate");

// testing when there is number in chinese word
test('Given word: 2019冠狀病毒病 Tranlsation: COVID-19, the coronavirus disease identified in 2019', () => {
    expect(translateWord("2019冠狀病毒病")).toStrictEqual({
        "english": 'COVID-19, the coronavirus disease identified in 2019',
        "pinyin": 'er4 ling2 yi1 jiu3 guan1 zhuang4 bing4 du2 bing4'
    });
});

// testing only chinese characters
test('Given word: 日本鶺鴒 Tranlsation: COVID-19, the coronavirus disease identified in 2019', () => {
    expect(translateWord("日本鶺鴒")).toStrictEqual({
        "english": "(bird species of China) Japanese wagtail (Motacilla grandis)",
        "pinyin": "Ri4 ben3 ji2 ling2"
    });
});

// testing non chinese characters
test('Given word: Hello Tranlsation: Not found since it is english', () => {
    expect(translateWord("Hello")).toStrictEqual({
        "english": "Not found.",
        "pinyin": "Not found."
    });
});

