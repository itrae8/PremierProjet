# Serveur de Mock


### Installer le serveur de mock (juste une fois)
npm install -g json-server
pour installer le composant pour la concaténation des mocks :
npm install json-concat --save

### Modifier les données des mocks
Modifier les fichiers sous mock/data et lancer la concaténation par 'node concat-data.js' pour générer le fichier mock/mock.json

### Lancer le serveur de mock à partir du fichier mock.json déjà concaténé
Se mettre à la racine, et lancer la commande :

json-server --watch mock.json --routes routes.json --port 4500 --middlewares server-formation.js

visible à l'url http://localhost:4500/

### Scripts spécifiques pour coller au comportement du backend
Modifier le fichier server-formation.json

### Doc officielle
https://github.com/typicode/json-server

### Licence 
MIT