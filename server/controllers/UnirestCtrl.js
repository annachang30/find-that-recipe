var unirest = require('unirest');
const API_KEY = "3f19ab4974mshfafac565d3e6a08p1c4e99jsn8daffc298e56";
const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

module.exports = {
    allRecipes: (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=bacon%2C+eggs")
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
            // console.log(result.status, result.headers, result.body);
            res.json(result.body);
        });
    },
    getJoke: (req,res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random")
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
                // console.log(result.status, result.headers, result.body)
                res.json(result.body);
        });
    },
    resultRecipes: (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=12&ranking=1&ingredients="+ req.params.first + "%2C+" + req.params.second)
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
            // console.log(result.status, result.headers, result.body);
            res.json(result.body);
        });

    },
    singleRecipe: (req, res) => {
        console.log(req.params.id);
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+ req.params.id + "/information")
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
                // console.log(result.status, result.headers, result.body)
                res.json(result.body);
        });
    },
    similarRecipe: (req, res) => {
        console.log(req.params.id);
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+ req.params.id + "/similar")
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
                // console.log(result.status, result.headers, result.body)
                res.json(result.body);
        });
    },
    createRecipes: (req, res) => {
        console.log("From UnirestCtrl:" + req.body.firstIngredient);
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ingredients="+req.body.firstIngredient+"%2C+"+req.body.secondIngredient)
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
                console.log(req.body.firstIngredient)
                console.log(result.body);
                res.json(result.body);
        });
        // Recipe.create(req.body, (err,recipe)=>{
        //     if(err){
        //         res.json(err);
        //     }else{
        //         res.json(recipe);
        //     }
        // })
    }
}