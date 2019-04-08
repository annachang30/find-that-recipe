const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

module.exports = {
    allRecipes: (req,res) => {
        Recipe.find({}, (err,recipes)=>{
            if(err){
                res.json(err);
            }else{
                res.json(recipes);
            }
        })
    },
    createRecipe: (req,res) => {
        Recipe.create(req.body, (err,recipe)=>{
            if(err){
                res.json(err);
            }else{
                res.json(recipe);
            }
        })
    },
    singleRecipe: (req,res) => {
        //assuming we'll have the ID sent here to get the single Product
        Recipe.findOne({_id: req.params.id}, (err,recipe)=>{ //we will get an error or a ride
            if(err){
                res.json(err);
            }else{
                res.json(recipe);
            }
        })
    },
    removeRecipe: (req,res) => {
        //we call it data here, because if we're removing Recipe, we're not returning Recipe
        Recipe.remove({_id: req.params.id}, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
}