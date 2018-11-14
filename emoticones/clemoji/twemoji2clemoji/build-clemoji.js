const fs = require("fs"),
    pretty = require('pretty');

const files = JSON.parse(fs.readFileSync("output.json"));

if (!fs.existsSync("clemoji"))
    fs.mkdirSync("clemoji");

for (var i = 0, content; i < files.length; i++) {
    let filename = files[i][0];
    console.log(`start: ${filename}: ok`);
    content = pretty(files[i][1]);

    content = content.replace(/(-->)(<svg)/g, '$1\n$2'); // add new line after comment

    content = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
${content}`; // xml header

    fs.writeFile(`clemoji/${filename}.svg`, content,(err) => {
        if (err) throw err;
        console.log(`-> ${filename}: ok`);
    });
}