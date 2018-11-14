Ouvrir la page `www/index.html` dans Firefox permet la conversion des Twemoji en Clemoji.

![last version Clemoji 3.0](https://i.imgur.com/oFAfkiC.png)

Pour sauvegarder les clemojis, copiez le contenu du textarea et collez le dans `output.json`.

```js
var content = [];$("svg").parent().each(function() {
   content .push([$(this).attr("id"), $(this).html()]);
});
JSON.stringify(content, null, 4);
```

Puis lancez, `node build-clemoji.js`. Vos Clemoji seront sauvegardés dans votre dossier `clemoji/`.
