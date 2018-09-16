Ouvrir la page `index.html` permet la conversion des Twemoji en Clemoji.

![](https://i.imgur.com/EPsRbfN.png)

Pour sauvegarder, exécuter dans la console du navigateur :

```js
var files = [];$("svg").parent().each(function() {
   files.push([$(this).attr("id"), $(this).html()]);
});
JSON.stringify(files, null, 4);
```

Puis avec un script créer un fichier pour chaque svg. Voici un script nodejs :

```js
const files = [
    [
        "1f47f",
        "<svg ..."
	],
    [
        "1f600",
        "<svg ..."
	],
    [
        "1f601",
        "<svg ..."
	],
	//...
];

const fs = require("fs");
for (var i = 0; i < files.length; i++) {
    fs.writeFileSync(`clemoji/${files[i][0]}.svg`, files[i][1]);
}
```

Vos Clemoji seront sauvegardés dans votre dossier `clemoji/`.
