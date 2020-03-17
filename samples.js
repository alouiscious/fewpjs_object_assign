/* Object.assign(),
allows us to combine 
properties from multiple Objects 
into a single Object */

// EXAMPLE
// Object.assign(firstObject, secondObject, thirdObject, ...);
// FIRST OBJECT RETURNS AFTER ALL OBJECTS MERGE

object.assign({egg: 3}, {flour: '1 cup'}); 
// => { egg: 3, flour: "1 cup" }

Object.assign({ eggs: 3 }, { chocolateChips: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' });
// { eggs: 3, chocolateChips: "1 cup", flour: "1/2 cup" }


// NON-DESTRUCTIVE OBJECT ASSIGN
function nonDestrctUpdt(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

const recipe = { eggs: 3 };
const newRecipe = nonDestrctUpdt(recipe, 'chocolate', '1 cup');
// => { eggs: 3, chocolate: "1 cup" }
 
newRecipe;
// => { eggs: 3, chocolate: "1 cup" }
 
recipe;
// => { eggs: 3 }