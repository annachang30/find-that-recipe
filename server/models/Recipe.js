const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    firstIngredient: {type: String, required: [true, "First Ingredient is required"], minlength: 1},
    secondIngredient: {type: String, required: [true, "Second Ingredient is required"], minlength: 1},
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', RecipeSchema);