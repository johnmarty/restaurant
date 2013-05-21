var recipes = require('../data/recipes').data;

var copy = require('../data/copy');

exports.list = function(req, res){
  res.render('recipes.ejs', {
    title: copy.data.recipes.title,
    suggestRecipeLink: copy.data.recipes.suggestRecipeLink,
    recipes: recipes
  });
};

exports.single = function(req, res) {
	var data = recipes.filter(function  (recipe) {
    return (recipe.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = copy.data.recipes.title;
    data.suggestRecipeLink = copy.data.recipes.suggestRecipeLink;

    res.render('recipe.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: copy.data.recipes.recipeNotFound});
  }
};

exports.suggest = function(req, res) {
  res.render('suggest_result.ejs', {
    title: copy.data.suggest.title,
    subtitle: copy.data.suggest.subtitle,
    name: req.body.name,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
};