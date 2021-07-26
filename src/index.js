const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const langsPath = path.join(__dirname, "..", "langs");

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync(path.join(__dirname, "languages.yml"), "utf8"));
  Object.keys(doc).forEach(lang => {
    const extension = doc[lang] && doc[lang].extensions && doc[lang].extensions[0]; 

    if (!extension) return;

    const fileName = `${lang}${extension}`;

    if (!fs.existsSync(path.join(langsPath, fileName))) {
      fs.writeFileSync(path.join(langsPath, fileName), '');
    }
  })
} catch (e) {
  console.log(e);
}
