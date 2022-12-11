'use strict'

let ingredientsTotalAmount = [300, 100, 1, 200, 2, 2, 4, 0, 0]
let ingredientsPerPortion = [150, 50, 0.5, 100, 1, 1, 2, 0, 0]
let ingredientsHTML = ['g Spaghetti oder Bucatini', 'g Lachs, geräuchert (Filet oder Scheiben)', 'Zwiebel(n)', 'g Sahne', 'Ei(er)', 'Knoblauchzehe(n)', 'EL Parmesan', 'Salz und Pfeffer', 'Öl (neutrales)']

function render() {
    let ingredientsList = document.getElementById('ingredientsList');

    ingredientsList.innerHTML = '';

    for (let i = 0; i < ingredientsPerPortion.length; i++) {
        ingredientsList.innerHTML += /*html*/ `
         <li><span id="ingredient_${i}">${ingredientsTotalAmount[i]}</span>&nbsp${ingredientsHTML[i]}</li>
        `
    }
}

function calculateIngredients() {
    let portionInput = document.getElementById('portionInputField');
    ingredientsTotalAmount = [];

    for (let i = 0; i < ingredientsPerPortion.length; i++) {
        if (ingredientsPerPortion[i] == 0) {
            ingredientsTotalAmount.push('')
        } else {
        ingredientsTotalAmount.push(portionInput.value * ingredientsPerPortion[i]);
        }
    }

    render();

}   