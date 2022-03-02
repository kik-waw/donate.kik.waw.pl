const en = require("./en.json");
const fr = require("./fr.json");
const de = require("./de.json");
const pl = require("./pl.json");

module.exports = {
    translations: {
        en,
        fr,
        de,
        pl,
    },
    defaultLang: "en",
    useBrowserDefault: true,
};
