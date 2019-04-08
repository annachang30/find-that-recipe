const RecipeCtrl = require('./../controllers/RecipeCtrl.js');
const UnirestCtrl = require('./../controllers/UnirestCtrl.js');
var path = require('path');

module.exports = (app) => {
    // app.get('/api/recipes', RecipeCtrl.allRecipes);
    // app.post('/api/recipes', RecipeCtrl.createRecipe);
    // app.get('/api/recipes/:id', RecipeCtrl.singleRecipe);
    // app.delete('/api/recipes/:id', RecipeCtrl.removeRecipe);

    app.get('/api/unirest/recipes', UnirestCtrl.allRecipes);
    app.get('/api/unirest/recipes/joke', UnirestCtrl.getJoke);
    app.get('/api/unirest/recipes/:id', UnirestCtrl.singleRecipe);
    app.get('/api/unirest/recipes/similar/:id', UnirestCtrl.similarRecipe);
    app.post('/api/unirest/recipes', UnirestCtrl.createRecipes);
    app.get('/api/unirest/recipes/result/:first/:second', UnirestCtrl.resultRecipes);
    app.all('*', (req,res)=> res.sendFile(path.resolve('./public/dist/public/index.html')))
}